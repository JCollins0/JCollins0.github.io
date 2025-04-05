import { Card, CardHeader, CardContent, Typography, Grid } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useEffect, useState } from "react";
import { fetchProjects, ProjectData } from "../../api/projects";
import "./Projects.scss";

type ProjectCardProps = ProjectData;

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <Card variant="outlined" className="project-description">
      <CardHeader
        title={
          <div className="card-title">
            {props.name}
            <a href={props.url} target="_blank" rel="noreferrer">
              <OpenInNewIcon />
            </a>
          </div>
        }
      ></CardHeader>
      <CardContent>
        <Typography variant="h5">Description</Typography>
        <Typography style={{ paddingLeft: "10px" }}>
          {props.description || "N/A"}
        </Typography>
        <Typography>
          <strong>Created: </strong>
          {new Date(props.created_at).toDateString()}
        </Typography>
        <Typography>
          <strong>Updated: </strong>
          {new Date(props.updated_at).toDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const Projects: React.FC = () => {
  const [projectData, setProjectData] = useState<Array<ProjectData>>([]);
  useEffect(() => {
    (async () => {
      try {
        setProjectData(await fetchProjects());
      } catch (error) {
        console.log("Some error", error);
      }
    })();
  }, []);

  return (
    <Grid
      container
      spacing={2}
      paddingTop={2}
      paddingBottom={2}
      columnSpacing={2}
      style={{ justifyContent: "space-evenly" }}
    >
      {projectData.map((project) => (
        <Grid item key={project.id}>
          <ProjectCard {...project}></ProjectCard>
        </Grid>
      ))}
    </Grid>
  );
};
