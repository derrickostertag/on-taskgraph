// Copyright 2017, DELL EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Deploy ScaleIO',
    injectableName: 'Graph.Deploy.ScaleIo',
    options: {
//       'remote-copy': {
//           'file': '/home/onrack/EMC-ScaleIO-mdm-2.0-12000.122.el7.x86_64.rpm',
//           'path': '/tmp',
//           'username': 'onrack',
//           'password': 'onrack',
//           'host': '172.31.128.120'

//       },
       'remote-exec': {
           'command': 'MDM_ROLE_IS_MANAGER=1 rpm -i /tmp/EMC-ScaleIO-mdm-2.0-12000.122.el7.x86_64.rpm',
//           'path': '/tmp',
           'username': 'onrack',
           'password': 'onrack',
           'host': '172.31.128.120'

       }
    },
    tasks: [
//        {
//           label: 'remote-copy',
//           taskName: 'Task.Remote.Copy'
//        },
        {
           label: 'remote-exec',
           taskName: 'Task.Remote.Exec'
        }
    ]
};
