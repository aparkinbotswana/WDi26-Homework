const stations = {
  a: ['b'],
  b: ['a', 'r', 'c'],
  c: ['b', 'd'],
  d: ['c', 'r', 'q'],
  q: ['f', 'd', 'j'],
  f: ['q', 'central', 'j'],
  r: ['d', 'g', 'b'],
  g: ['r', 'h'],
  h: ['g', 'central', 'n'],
  central: ['h', 'j', 'm', 'f'],
  j: ['central', 'k', 'q'],
  k: ['j', 'm', 'central'],
  m: ['l', 'k'],
  l: ['m', 'n'],
  n: ['m', 'l', 'h']
};

let start;
let end;

const genGraph = () => {
  const graph = {
    nodes: [],
    edges: []
  };
  let c = 0;
  _.each(stations, (station, index) => {
    c += 1;
    graph.nodes.push({
      id: index,
      label: index,
      x: c * Math.sin(c),
      y: c + c,
      size: 10
    });
    _.each(station, (node, i) => {
      graph.edges.push({
        id: `e${i}${index}${node}`,
        source: node,
        target: index,
        size: 10
      });
    });
  });
  return graph;
};

const backtrace = (tree, start, end) => {
  console.log(tree);

  const path = [end];
  const keys = Object.keys(tree);
  while (!_.contains(path, start)) {
    for (let i = 0; i < keys.length; i++) {
      if (_.contains(tree[keys[i]], path[path.length - 1])) {
        path.push(keys[i]);
      }
    }
  }
  path.reverse();

  return path;
};

const bfs = (start, end) => {
  const q = [];
  const visited = [start];
  const tree = {};
  let path;

  let currentNode = start;

  while (currentNode !== end) {
    tree[currentNode] = [];

    stations[currentNode].forEach((station) => {
      if (_.contains(visited, station)) {
        return;
      }
      tree[currentNode].push(station);
      q.push(station);
    });

    currentNode = q.shift();

    if (currentNode === end) {
      path = backtrace(tree, start, end);
    }
    visited.push(currentNode);
  }

  return path;
};

const s = new sigma('container');

const myGraph = s.graph;
myGraph.read(genGraph());
s.settings({
  edgeColor: 'default',
  defaultEdgeColor: '#999',
  defaultLabelSize: 25,
  maxNodeSize: 20,
  maxEdgeSize: 10
});

const drawPath = () => {
  const path = bfs(start, end);
  for (let i = 0; i < path.length; i++) {
    _.each(s.graph.edges(), (edge) => {
      if (
        (edge.source === path[i + 1] && edge.target === path[i]) ||
        (edge.source === path[i] && edge.target === path[i + 1])
      ) {
        edge.color = '#ff3333';
      }
    });
    _.each(s.graph.nodes(), (node) => {
      if (node.id === path[i]) {
        node.color = '#ff2233';
      }
    });
  }
};

s.bind('clickNode', function(e) {
  if (start && end) {
    start = '';
    end = '';
    _.each(s.graph.edges(), (edge) => {
      edge.color = '#999';
    });
    _.each(s.graph.nodes(), (node) => {
      node.color = '#000000';
    });
  }
  s.graph.nodes(e.data.node.id).color = '#ff3333';

  if (!start) {
    start = e.data.node.id;
  } else if (!end) {
    end = e.data.node.id;
  }
  if (start && end) {
    drawPath();
  }
  s.refresh();
});

s.refresh();
