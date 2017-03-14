// Copyright 2017, DELL EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Cluster ScaleIO 3-Node',
    injectableName: 'Graph.Cluster.ScaleIo.3node',
    options: {
       'remote-exec1': {
           'command': 'scli --create_mdm_cluster --master_mdm_ip 172.31.128.120 --master_mdm_management_ip 172.31.128.120 --master_mdm_name mdm120 --accept_license --approve_certificate',
           'username': 'root',
           'password': 'onrack',
           'host': '172.31.128.120'

       },
       'remote-exec2': {
           'command': 'scli --set_password --old_password admin --new_password Scaleio123',
           'username': 'root',
           'password': 'onrack',
           'host': '172.31.128.120'

       },
       'remote-exec3': {
           'command': 'scli --add_standby_mdm --new_mdm_ip 172.31.128.130 --mdm_role manager --new_mdm_management_ip 172.31.128.130  --new_mdm_name mdm130',
           'username': 'root',
           'password': 'onrack',
           'host': '172.31.128.120'

       },
       'remote-exec4': {
           'command': 'scli --add_standby_mdm --new_mdm_ip 172.31.128.140 --mdm_role tb --new_mdm_name tb140',
           'username': 'root',
           'password': 'onrack',
           'host': '172.31.128.120'
       },
       'remote-exec5': {
           'command': 'scli --query_cluster',
           'username': 'root',
           'password': 'onrack',
           'host': '172.31.128.120'
       },
       'remote-exec6': {
           'command': 'scli --switch_cluster_mode --cluster_mode 3_node --add_slave_mdm_name mdm130 --add_tb_name tb140',
           'username': 'root',
           'password': 'onrack',
           'host': '172.31.128.120'
       },
       'remote-exec7': {
           'command': 'scli --query_cluster',
           'username': 'root',
           'password': 'onrack',
           'host': '172.31.128.120'
       }
    },
    tasks: [
        {
           label: 'remote-exec1',
           taskName: 'Task.Remote.Exec',
        },
        {
           label: 'remote-exec2',
           taskName: 'Task.Remote.Exec',
           waitOn: {
               'remote-exec1': 'finished'
           }
        },
        {
           label: 'remote-exec3',
           taskName: 'Task.Remote.Exec',
           waitOn: {
               'remote-exec2': 'finished'
           }
        },
        {
           label: 'remote-exec4',
           taskName: 'Task.Remote.Exec',
           waitOn: {
               'remote-exec3': 'finished'
           }
        },
        {
           label: 'remote-exec5',
           taskName: 'Task.Remote.Exec',
           waitOn: {
               'remote-exec4': 'finished'
           }
        },
        {
           label: 'remote-exec6',
           taskName: 'Task.Remote.Exec',
           waitOn: {
               'remote-exec5': 'finished'
           }
        },
        {
           label: 'remote-exec7',
           taskName: 'Task.Remote.Exec',
           waitOn: {
               'remote-exec6': 'finished'
           }
        }
    ]
};
