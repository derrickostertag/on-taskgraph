// Copyright 2017, DELL EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Deploy ScaleIO',
    injectableName: 'Graph.Deploy.ScaleIo',
    options: {
    },
    tasks: [
        {
           label: 'Install ScaleIO',
           taskName: 'Task.Install.ScaleIo'
        }
    ]
};
