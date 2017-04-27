// Copyright 2017, DELL EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Install ScaleIO Tie Breaker',
    injectableName: 'Graph.Install.ScaleIo.Tb',
    options: {
       defaults: {
           'path': null,
           'username': null,
           'password': null,
           'host': null
       },
       'remote-copy1': {
           'file': '/home/onrack/files/RPM-GPG-KEY-CentOS-7'
       },
       'remote-copy2': {
           'file': '/home/onrack/files/RPM-GPG-KEY-ScaleIO_2.0.12000.122'
       },
       'remote-copy3': {
           'file': '/home/onrack/files/libaio-0.3.109-12.el7.x86_64.rpm'
       },
       'remote-copy4': {
           'file': '/home/onrack/files/EMC-ScaleIO-mdm-2.0-12000.122.el7.x86_64.rpm'
       },
       'remote-copy5': {
           'file': '/home/onrack/files/EMC-ScaleIO-sdc-2.0-12000.122.el7.x86_64.rpm'
       },
       'remote-copy6': {
           'file': '/home/onrack/files/EMC-ScaleIO-sds-2.0-12000.122.el7.x86_64.rpm'
       },
       'remote-exec1': {
           'command': 'rpm --import /tmp/RPM-GPG-KEY-CentOS-7'
       },
       'remote-exec2': {
           'command': 'rpm --import /tmp/RPM-GPG-KEY-ScaleIO_2.0.12000.122'
       },
       'remote-exec3': {
           'command': 'rpm -i /tmp/libaio-0.3.109-12.el7.x86_64.rpm'
       },
       'remote-exec4': {
           'command': 'MDM_ROLE_IS_MANAGER=0 rpm -i /tmp/EMC-ScaleIO-mdm-2.0-12000.122.el7.x86_64.rpm'
       },
       'remote-exec5': {
           'command': 'rpm -i /tmp/EMC-ScaleIO-sds-2.0-12000.122.el7.x86_64.rpm'
       },
       'remote-exec6': {
           'command': 'MDM_IP=172.31.128.120,172.31.128.130,172.31.128.140 rpm -i /tmp/EMC-ScaleIO-sdc-2.0-12000.122.el7.x86_64.rpm'
       }
    },
    tasks: [
        {
           label: 'remote-copy1',
           taskName: 'Task.Remote.Copy'
        },
        {
           label: 'remote-copy2',
           taskName: 'Task.Remote.Copy',
           waitOn: {
               'remote-copy1': 'finished'
           }
        },
        {
           label: 'remote-copy3',
           taskName: 'Task.Remote.Copy',
           waitOn: {
               'remote-copy2': 'finished'
           }
        },
        {
           label: 'remote-copy4',
           taskName: 'Task.Remote.Copy',
           waitOn: {
               'remote-copy3': 'finished'
           }
        },
        {
           label: 'remote-copy5',
           taskName: 'Task.Remote.Copy',
           waitOn: {
               'remote-copy4': 'finished'
           }
        },
        {
           label: 'remote-copy6',
           taskName: 'Task.Remote.Copy',
           waitOn: {
               'remote-copy5': 'finished'
           }
        },
        {
           label: 'remote-exec1',
           taskName: 'Task.Remote.Exec',
           waitOn: {
               'remote-copy6': 'finished'
           }
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
        }
    ]
};