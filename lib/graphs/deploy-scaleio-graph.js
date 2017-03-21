// Copyright 2017, DELL EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Deploy ScaleIO',
    injectableName: 'Graph.Deploy.ScaleIo',
    options: {
       'install-mdm-master-graph': {
           graphOptions: {
              target: null,
              defaults: {
                 'path': null,
                 'username': null,
                 'password': null,
                 'host': null
              }
          }
       },
       'install-mdm-standby-graph': {
           graphOptions: {
              target: null,
              defaults: {
                 'path': null,
                 'username': null,
                 'password': null,
                 'host': null
              }
          }
       },
       'install-tb-graph': {
           graphOptions: {
              target: null,
              defaults: {
                 'path': null,
                 'username': null,
                 'password': null,
                 'host': null
              }
          }
       },
       'cluster-scaleio-3node-graph': {
           graphOptions: {
              target: null,
              defaults: {
                 'path': null,
                 'username': null,
                 'password': null,
                 'host': null
              }
          }
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
                    graphOptions: { }
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
                   graphOptions: { }
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
                  graphOptions: { }
              },
              properties: {}
          },
          waitOn: {
              'install-mdm-standby-graph': 'finished'
          }
      },
       {
           label: 'cluster-scaleio-3node-graph',
           taskDefinition: {
               friendlyName: 'Cluster ScaleIO 3-Node Graph',
               injectableName: 'Task.Graph.Run.Cluster.ScaleIo.3node',
               implementsTask: 'Task.Base.Graph.Run',
               options: {
                   graphName: 'Graph.Cluster.ScaleIo.3node',
                   graphOptions: { }
               },
               properties: {}
           },
           waitOn: {
               'install-tb-graph': 'finished'
           }
       }
    ]
};
