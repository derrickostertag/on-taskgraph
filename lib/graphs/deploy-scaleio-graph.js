// Copyright 2017, DELL EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Deploy ScaleIO',
    injectableName: 'Graph.Deploy.ScaleIo',
    options: {
        defaults: {
           graphOptions: {
               target: '58beed17a40ec8177b0713a3'
           },
           nodeId: '68beed14a40ec8177b07138b'
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
                    defaults : {
                        graphOptions: {   }
                   }
               },
               properties: {}
           }
       },
        {
           label: 'install-mdm-standby-graph',
           taskDefinition: {
               friendlyName: 'Install MDM Standby Graph',
               injectableName: 'Task.Graph.Run.ScaleIo.Mdm.Standby.Install',
               implementsTask: 'Task.Base.Graph.Run',
               options: {
                   graphName: 'Graph.Install.ScaleIo.Mdm.Standby',
                   defaults : {
                       graphOptions: {   }
                   }
               },
               properties: {}
           },
           waitOn: {
               'install-mdm-master-graph': 'finished'
           }
       },
       {
          label: 'install-tb-graph',
          taskDefinition: {
              friendlyName: 'Install Tie Breaker Graph',
              injectableName: 'Task.Graph.Run.ScaleIo.Tb.Install',
              implementsTask: 'Task.Base.Graph.Run',
              options: {
                  graphName: 'Graph.Install.ScaleIo.Tb',
                  defaults : {
                      graphOptions: {   }
                  }
              },
              properties: {}
          },
          waitOn: {
              'install-mdm-standby-graph': 'finished'
          }
      }
    ]
};
