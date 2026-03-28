import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  category: string;
  proficiency: number;
  tools: readonly string[];
}

interface Props {
  skills: Skill[];
  categoryColors: Record<string, string>;
}

interface SimNode extends d3.SimulationNodeDatum {
  id: string;
  skill: Skill;
}

interface TooltipState {
  x: number;
  y: number;
  skill: Skill;
  color: string;
}

export default function SkillGraph({ skills, categoryColors }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });

  useEffect(() => {
    const update = () => {
      const parent = svgRef.current?.parentElement;
      if (parent) {
        setDimensions({
          width: parent.clientWidth,
          height: Math.min(parent.clientWidth * 0.65, 600),
        });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const { width, height } = dimensions;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const nodes: SimNode[] = skills.map(s => ({ id: s.name, skill: s }));

    const centroids: Record<string, { x: number; y: number }> = {
      'ML Models':    { x: width * 0.28, y: height * 0.32 },
      'Optimization': { x: width * 0.72, y: height * 0.32 },
      'NLP / RAG':    { x: width * 0.72, y: height * 0.70 },
      'Data & SQL':   { x: width * 0.28, y: height * 0.70 },
    };

    function clusterForce(alpha: number): void {
      nodes.forEach(node => {
        const centroid = centroids[node.skill.category];
        if (!centroid) return;
        node.vx = (node.vx ?? 0) + (centroid.x - (node.x ?? 0)) * alpha * 0.4;
        node.vy = (node.vy ?? 0) + (centroid.y - (node.y ?? 0)) * alpha * 0.4;
      });
    }
    (clusterForce as any).initialize = () => {};

    const simulation = d3
      .forceSimulation<SimNode>(nodes)
      .force('charge', d3.forceManyBody<SimNode>().strength(-80))
      .force('collision', d3.forceCollide<SimNode>(d => d.skill.proficiency * 30 + 12))
      .force('cluster', clusterForce as any)
      .on('tick', ticked);

    // Category labels
    const labelG = svg.append('g');
    Object.entries(centroids).forEach(([cat, pos]) => {
      const color = categoryColors[cat];
      labelG.append('text')
        .attr('x', pos.x)
        .attr('y', pos.y - 30)
        .attr('text-anchor', 'middle')
        .attr('fill', color ?? '#888')
        .attr('font-size', '11px')
        .attr('font-family', 'JetBrains Mono, monospace')
        .attr('font-weight', '500')
        .attr('letter-spacing', '0.1em')
        .attr('opacity', 0.6)
        .text(cat.toUpperCase());
    });

    // Node circles
    const nodeG = svg.append('g');
    const circles = nodeG
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', d => d.skill.proficiency * 28 + 8)
      .attr('fill', d => (categoryColors[d.skill.category] ?? '#888') + '22')
      .attr('stroke', d => categoryColors[d.skill.category] ?? '#888')
      .attr('stroke-width', 1.5)
      .attr('cursor', 'pointer')
      .on('mouseenter', (event: MouseEvent, d: SimNode) => {
        d3.select(event.currentTarget as Element)
          .attr('fill', (categoryColors[d.skill.category] ?? '#888') + '55');
        const rect = svgRef.current!.getBoundingClientRect();
        setTooltip({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          skill: d.skill,
          color: categoryColors[d.skill.category] ?? '#888',
        });
      })
      .on('mouseleave', (event: MouseEvent, d: SimNode) => {
        d3.select(event.currentTarget as Element)
          .attr('fill', (categoryColors[d.skill.category] ?? '#888') + '22');
        setTooltip(null);
      });

    // Node labels
    const labels = nodeG
      .selectAll('text')
      .data(nodes)
      .join('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', d => categoryColors[d.skill.category] ?? '#888')
      .attr('font-size', d => Math.max(9, d.skill.proficiency * 11))
      .attr('font-family', 'Inter, sans-serif')
      .attr('pointer-events', 'none')
      .text(d => d.id);

    function ticked(): void {
      circles.attr('cx', d => d.x ?? 0).attr('cy', d => d.y ?? 0);
      labels.attr('x',  d => d.x ?? 0).attr('y',  d => d.y ?? 0);
    }

    const cooldownTimer = setTimeout(() => simulation.alphaTarget(0), 3000);
    return () => {
      clearTimeout(cooldownTimer);
      simulation.stop();
    };
  }, [skills, categoryColors, dimensions]);

  return (
    <div style={{ position: 'relative', width: '100%', height: dimensions.height }}>
      <svg ref={svgRef} width={dimensions.width} height={dimensions.height} />

      {tooltip && (
        <div
          style={{
            position: 'absolute',
            left: tooltip.x + 12,
            top: tooltip.y - 12,
            background: '#12121A',
            border: `1px solid ${tooltip.color}40`,
            borderRadius: 8,
            padding: '10px 12px',
            minWidth: 160,
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <div style={{ color: tooltip.color, fontWeight: 600, marginBottom: 4 }}>
            {tooltip.skill.name}
          </div>
          <div style={{ color: '#8888A0', fontSize: 11, marginBottom: 8 }}>
            {tooltip.skill.category}
          </div>
          <div style={{ height: 4, borderRadius: 2, background: '#1E1E2E', marginBottom: 8 }}>
            <div style={{
              height: 4,
              borderRadius: 2,
              width: `${tooltip.skill.proficiency * 100}%`,
              background: tooltip.color,
            }} />
          </div>
          <div style={{ color: '#555568', fontSize: 10 }}>
            {tooltip.skill.tools.join(' · ')}
          </div>
        </div>
      )}
    </div>
  );
}
