import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  list: {
    width: '80%',
    maxWidth: '600px',
  },
});

function CourseList() {
  const classes = useStyles();

  // Dummy course data for example purposes
  const courses = [
    { name: 'Mathematics', description: 'Basic mathematics course' },
    { name: 'English', description: 'Basic English language course' },
    { name: 'Science', description: 'Basic science course' },
    { name: 'History', description: 'Study of past events' },
    { name: 'Geography', description: 'Study of the earth and its features' },
    { name: 'Civics', description: 'Study of citizenship and government' },
    { name: 'Economics', description: 'Study of production, consumption, and transfer of wealth' },
    { name: 'Accounting', description: 'Recording and analyzing financial transactions' },
    { name: 'Business Studies', description: 'Study of business management and operations' },
    { name: 'Computer Science', description: 'Study of computer software and hardware' },
    { name: 'Information Technology', description: 'Study of the use of technology for managing and processing information' },
    { name: 'Web Development', description: 'Design and development of websites' },
    { name: 'Graphic Design', description: 'Visual communication and problem-solving through the use of typography, photography, and illustration' },
    { name: 'Music', description: 'Study of sound and its creation and manipulation' },
    { name: 'Graphic Design', description: 'Visual communication and problem-solving through the use of typography, photography, and illustration' },
    { name: 'Music', description: 'Study of sound and its creation and manipulation' },
    { name: 'Graphic Design', description: 'Visual communication and problem-solving through the use of typography, photography, and illustration' },
    { name: 'Music', description: 'Study of sound and its creation and manipulation' }
  ];
  

  return (
    <div className={classes.root}>
      <div style={{width:'100vw', height:'100vh'}}>
      <List className={classes.list}>
        {courses.map((course, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={course.name}
              secondary={course.description}
            />
          </ListItem>
        ))}
      </List>
      </div>
    </div>
  );
}

export default CourseList;
