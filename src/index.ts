import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the itables-jupyterlab extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'itables-jupyterlab:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension itables-jupyterlab is activated!');
  }
};

export default plugin;
