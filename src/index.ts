import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import $ from 'jquery';
import 'datatables.net';

/**
 * Initialization data for the itables-jupyterlab extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'itables-jupyterlab:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension itables-jupyterlab is activated!');

    // This is not the final code - but say that we want to turn
    // any HTML table into an interactive table
    $(document).ready(() => {
      const tables = document.getElementsByTagName('table');

      for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        console.log('Turning table %s into a datatables.net object', table);
        $(table.id).DataTable();
      }
    });
  }
};

export default plugin;
