const projectData: Array<ProjectData> = [
  {
    name: "node-bks",
    url: "https://github.com/JCollins0/node-bks",
    created_at: "2025-04-05T00:04:13Z",
    updated_at: "2025-04-05T00:05:24Z",
    description: "Node.js BKS (Binary Key Store) library",
    id: 123,
  },
  {
    name: "test-web-components",
    url: "https://github.com/JCollins0/test-web-components",
    id: 707454411,
    created_at: "2023-10-20T00:04:13Z",
    updated_at: "2023-10-20T00:05:24Z",
    description: "Sample web components repo",
  },
  {
    name: "JCollins0.github.io",
    url: "https://github.com/JCollins0/JCollins0.github.io",
    id: 147035865,
    updated_at: "2023-10-19T23:56:42Z",
    created_at: "2018-09-01T22:02:34Z",
    description: "Blog Site",
  },
  {
    name: "MenuProject",
    url: "https://github.com/JCollins0/MenuProject",
    id: 148069121,
    updated_at: "2018-10-20T00:13:28Z",
    created_at: "2018-09-09T21:57:44Z",
    description: null,
  },
  {
    name: "SudokuSolver",
    url: "https://github.com/JCollins0/SudokuSolver",
    id: 123519378,
    updated_at: "2018-03-02T02:29:01Z",
    created_at: "2018-03-02T02:28:41Z",
    description:
      "Fast Sudoku Solver that can solve any size puzzle using CLINGO",
  },
  {
    name: "C-Data-Structures",
    url: "https://github.com/JCollins0/C-Data-Structures",
    id: 113705844,
    updated_at: "2017-12-10T06:56:34Z",
    created_at: "2017-12-09T22:31:37Z",
    description: "Implementation of data structures in C",
  },
  {
    name: "BashScripts",
    url: "https://github.com/JCollins0/BashScripts",
    id: 106318522,
    updated_at: "2017-10-09T19:13:02Z",
    created_at: "2017-10-09T18:11:04Z",
    description: null,
  },
  {
    name: "battlecastle",
    url: "https://github.com/JCollins0/battlecastle",
    id: 41376614,
    updated_at: "2016-01-11T18:34:00Z",
    created_at: "2015-08-25T17:03:45Z",
    description: null,
  },
];

export interface ProjectData {
  name: string;
  url: string;
  id: number;
  updated_at: string;
  created_at: string;
  description: string | null;
}

export const fetchProjects = async () => {
  return new Promise<Array<ProjectData>>((resolve) => resolve(projectData));
};
