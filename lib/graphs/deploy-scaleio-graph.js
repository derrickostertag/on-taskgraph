// Copyright 2017, DELL EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Deploy ScaleIO',
    injectableName: 'Graph.Deploy.ScaleIo',
    options: {
//          nodeId: '68beed14a40ec8177b07138b'
//           nodeIds: [ "{{ options.nodeId }}" ]
       'install-mdm-master-graph': {
           graphOptions: {
              target: '58caf6a4cb5361300e98f0c4',
              defaults: {
                 'path': '/tmp',
                 'username': 'root',
                 'password': 'onrack',
                 'host': '172.31.128.120'
              }
          }
       },
       'install-mdm-standby-graph': {
           graphOptions: {
              target: '58cb00efcb5361300e98f0dc',
              defaults: {
                 'path': '/tmp',
                 'username': 'root',
                 'password': 'onrack',
                 'host': '172.31.128.130'
              }
          }
       },
       'install-tb-graph': {
           graphOptions: {
              target: '58cb00efcb5361300e98f0dc',
              defaults: {
                 'path': '/tmp',
                 'username': 'root',
                 'password': 'onrack',
                 'host': '172.31.128.140'
              }
          }
       },
       'cluster-scaleio-3node-graph': {
           graphOptions: {
              target: '58cb00efcb5361300e98f0dc',
              defaults: {
                 'username': 'root',
                 'password': 'onrack',
                 'host': '172.31.128.120'
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
