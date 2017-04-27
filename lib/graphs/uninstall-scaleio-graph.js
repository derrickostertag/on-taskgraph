// Copyright 2017, DELL EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Uninstall ScaleIO',
    injectableName: 'Graph.Uninstall.ScaleIo',
    options: {
       defaults: {
           'path': null,
           'username': null,
           'password': null,
           'host': null
       },
       'remote-exec1': {
           'command': 'rpm -e EMC-ScaleIO-sds-2.0-12000.122.el7.x86_64'
       },
       'remote-exec2': {
           'command': 'rpm -e EMC-ScaleIO-sdc-2.0-12000.122.el7.x86_64'
       },
       'remote-exec3': {
           'command': 'rpm -e EMC-ScaleIO-mdm-2.0-12000.122.el7.x86_64'
       },
       'remote-exec4': {
           'command': 'rpm -e libaio-0.3.109-12.el7.x86_64'
       },
       'remote-exec5': {
           'command': 'rpm --qf RPM-GPG-KEY-CentOS-7'
       },
       'remote-exec6': {
           'command': 'rpm --qf RPM-GPG-KEY-ScaleIO_2.0.12000.122'
       },
       'remote-exec7': {
           'command': 'rm /tmp/EMC-ScaleIO-sdc-2.0-12000.122.el7.x86_64.rpm'
       },
       'remote-exec8': {
           'command': 'rm /tmp/EMC-ScaleIO-mdm-2.0-12000.122.el7.x86_64.rpm'
       },
       'remote-exec9': {
           'command': 'rm /tmp/EMC-ScaleIO-sds-2.0-12000.122.el7.x86_64.rpm'
       },
       'remote-exec10': {
           'command': 'rm /tmp/RPM-GPG-KEY-CentOS-7'
       },
       'remote-exec11': {
           'command': 'rm /tmp/RPM-GPG-KEY-ScaleIO_2.0.12000.122'
       },
       'remote-exec12': {
           'command': 'rm /tmp/libaio-0.3.109-12.el7.x86_64.rpm'
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
        },
        {
           label: 'remote-exec8',
           taskName: 'Task.Remote.Exec',
           waitOn: {
               'remote-exec7': 'finished'
           }
        },
        {
           label: 'remote-exec9',
           taskName: 'Task.Remote.Exec',
           waitOn: {
               'remote-exec8': 'finished'
           }
        },
        {
           label: 'remote-exec10',
           taskName: 'Task.Remote.Exec',
           waitOn: {
               'remote-exec9': 'finished'
           }
        },
        {
           label: 'remote-exec11',
           taskName: 'Task.Remote.Exec',
           waitOn: {
               'remote-exec10': 'finished'
           }
        },
        {
           label: 'remote-exec12',
           taskName: 'Task.Remote.Exec',
           waitOn: {
               'remote-exec11': 'finished'
           }
        }
    ]
};