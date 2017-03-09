// Copyright 2017, DELL EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Deploy ScaleIO',
    injectableName: 'Graph.Deploy.ScaleIo',
    options: {
        defaults: {
//           graphOptions: {
//               target: null
//           },
//           nodeId: null,
//           nodeIds: [ "{{ options.nodeId }}" ]
       }
    },
    tasks: [
        {
           label: 'install-mdm-master-graph',
           taskDefinition: {
               friendlyName: 'Install MDM Master Graph',
               injectableName: 'Task.Graph.Run.ScaleIo.Mdm.Master.Install',
               implementsTask: 'Task.Base.Graph.Run',
               options: {
                   graphName: 'Graph.Install.ScaleIo.Mdm.Master',
                   graphOptions: {}
               },
               properties: {}
           }
       }
    ]
};
