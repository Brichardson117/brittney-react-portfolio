import React from "react";
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../../App.css'

function Projects() {
  return [
    {
      name: "Crypto-Watch",
      description:
        "Crypto Watch! A new app where you can monitior your favorite Crypto currencies! We created a list of the 20 most popular currencies that you can be added to your personal watch list. This project was built with HTML, CSS, JavaScript, and Bulma.",
      gitHubLink: "https://github.com/Brichardson117/Crypto-Watch",
      deployedLink: "https://brichardson117.github.io/Crypto-Watch/",
      src: require(`../../assets/projects/A.png`)
    },
    {
      name: "Tech Jobs",
      description:
        "A FullStack web application built for developers to find remote work. Users who have an account with us can also search for jobs based on a skill that they are proficient in. Built with Handlebars.js, JavaScript, CSS, Node.js, Express.js, and Sequelize.",
      gitHubLink: "https://github.com/Brichardson117/Tech-Jobs",
      deployedLink: "https://techjob2.herokuapp.com",
      src: require(`../../assets/projects/B.png`)
    },
    {
      name: "E-commerce Backend",
      description:
        "Backend application for an e-commerce website to view, add, delete and update different products, tags, and categories. Built with JavaScript, Node.js, MySQL, Express.js and demoed using Insomina.",
      gitHubLink: "https://github.com/Brichardson117/improved-bassoon",
      deployedLink: 'https://youtu.be/Yu8h0E0yCIc',
      src: require(`../../assets/projects/C.gif`)
      
    },
  ]
}

function ProjectTemplate() {

  return (
    <section>
      <h2>My Projects</h2>
    <Grid container spacing={2} className="uk-flex">
    {Projects().map((projects) => (
      <Grid item sm={6} md={4} sx={{ flexGrow: 1 }} key={projects.title}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
          }}
        >
          <CardMedia
            component="a"
            href={projects.gitHubLink}
            sx={{ height: 0, pt: '65%' }}
            image={projects.src}
            title={projects.name}
            rel="nofollow"
            target="_blank"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" align="left" component="h2">
              {projects.title}
            </Typography>
            <Typography component="p">{projects.description}</Typography>
          </CardContent>
          <CardActions>
            <Button component="a" variant="outlined" color="secondary"  href={projects.deployedLink} target='_blank' size="medium">
              Deployed or Demo
            </Button>
            <Button component="a" variant="outlined" color="secondary"  href={projects.gitHubLink} target='_blank' size="medium">
              Github
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
</section>
);

}

export default ProjectTemplate
