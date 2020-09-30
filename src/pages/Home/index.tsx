import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 300,
  },
  tabs: {
    borderRight: `3px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Início" {...a11yProps(0)} />
        <Tab label="Monitoramento familiar" {...a11yProps(1)} />
        <Tab label="Sua mente" {...a11yProps(2)} />
        <Tab label="Seu corpo" {...a11yProps(3)} />
        <Tab label="Seu bem estar" {...a11yProps(4)} />
        <Tab label="Comunidade" {...a11yProps(5)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        Início
      </TabPanel>
      <TabPanel value={value} index={1}>
        Monitoramento familiar
      </TabPanel>
      <TabPanel value={value} index={2}>
        Sua mente
      </TabPanel>
      <TabPanel value={value} index={3}>
        Seu corpo
      </TabPanel>
      <TabPanel value={value} index={4}>
        Seu bem estar
      </TabPanel>
      <TabPanel value={value} index={5}>
        Comunidade
      </TabPanel>
    </div>
  );
}
