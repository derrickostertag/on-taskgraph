// Copyright 2017, DELL EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Deploy ScaleIO',
    injectableName: 'Graph.Deploy.ScaleIo',
    options: {
    },
    tasks: [
/*        {
            label: 'install-os-mdm-master-graph',
            taskDefinition: {
                friendlyName: 'Install OS MDM Master Graph',
                injectableName: 'Task.Graph.Run.OS.Mdm.Master.Install',
                implementsTask: 'Task.Base.Graph.Run',
                options: {
                    graphName: 'Graph.InstallCentOS',
                    graphOptions: { }

               properties: {}
           }
       },
       {
            label: 'install-os-mdm-standby-graph',
            taskDefinition: {
                friendlyName: 'Install OS MDM Standby Graph',
                injectableName: 'Task.Graph.Run.OS.Mdm.Standby.Install',
                implementsTask: 'Task.Base.Graph.Run',
                options: {
                    graphName: 'Graph.InstallCentOS',
                    graphOptions: { }
               },
               properties: {}
           }
       },
       {
            label: 'install-os-tb-graph',
            taskDefinition: {
                friendlyName: 'Install OS Tb Graph',
                injectableName: 'Task.Graph.Run.OS.Tb.Install',
                implementsTask: 'Task.Base.Graph.Run',
                options: {
                    graphName: 'Graph.InstallCentOS',
                    graphOptions: { }
               },
               properties: {}
           }
       }, */
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
 
 /*           waitOn: {
               'install-os-mdm-master-graph': 'succeeded',
               'install-os-mdm-standby-graph': 'succeeded',
               'install-os-tb-graph': 'succeeded'
           } */

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
               'install-mdm-master-graph': 'succeeded'
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
              'install-mdm-standby-graph': 'succeeded'
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
               'install-tb-graph': 'succeeded'
           }
       }
    ]
};
