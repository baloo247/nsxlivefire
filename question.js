'use strict';

module.exports = {
    /**
     * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
     * Make sure the first answer is the correct one. Set at least ANSWER_COUNT answers, any extras will be shuffled in.
     */
    QUESTIONS_EN_GB: [
      {
          'which of the following does the controller cluster contain?': [
              'vtep table, arp table and mac table',
              'dns',
              'vtep table',
              'arp table',
              'mac table',
          ],
      },
      {
          'When a DLR instance is in bridge mode which is correct?': [
              'The Bridging instance is the host with the control VM for that instance of DLR',
              'The Bridging instance is based on the host with most number of controllers',
              'The Bridging instance is not required for bridging, only distributed firewall functionality',
          ],
      },
      {
          'the dfw utilises the controllers to function?': [
            'false',
            'true',
            'maybe',
          ],
      },
      {
          ' Which of the following vXLAN replication modes offloads local replication using multicast with remote being unicast?': [
            'hybrid',
            'multicast',
            'unicast',
          ],
      },
      {
          'Which of the following functions allow 3rd party extensibility?': [
            'service composer',
            'service designer',
            'VCNS',
            'DFW',
          ],
      },
      {
          'A NSX Controller is installed into the hypervisor as a kernel mode  module using a VIB?': [
            'false',
            'true',
            'maybe',
          ],
      },
      {
          'multicast replication mode requires controllers?': [
            'false',
            'true',
            'maybe',
          ],
      },
      {
          'an NSX manager backup from an older version can be restored after an upgrade?': [
            'false',
            'true',
            'maybe',
          ],
      },
      {
          'the ESG can be upgrade/downgraded in size without impacting the configuration?': [
            'true',
            'false',
            'maybe',
          ],
      },
      {
          'unicast replicaiton mode requires controllers?': [
            'true',
            'false',
            'maybe',
          ],
      },
      {
          'the DLR LIF VMAC is the same per host?': [
            'true',
            'false',
            'sometimes',
          ],
      },
      {
          'which of the following destinations can be used for NSX Manager backups?': [
            'sFTP and FTP',
            'TFTP',
            'CIFS',
            'SFTP',
            'FTP',
          ],
      },
      {
          'hybrid replicaiton mode requires controllers?': [
            'true',
            'false',
            'maybe',
          ],
      },
      {
          'the dfw exists in the VM Kernel?': [
            'true',
            'false',
            'maybe',
          ],
      },
      {
          'the dfw rules are independent of VXLAN and VLAN?': [
            'true',
            'false',
            'maybe',
          ],
      },
      {
          'The DFW supports L7 application rules?': [
            'false',
            'true',
            'maybe',
          ],
      },
      {
          'The dLR can exist in which of the following modes?': [
            'bridging and routing modes',
            'bridging mode',
            'routing mode',
            'switching mode',
          ],
      },
      {
          'which nsx component prevents hair pinning?': [
            'dlr',
            'esg',
            'vxlan',
          ],
      },
      {
          'The DFW supports L2-4  rules?': [
            'true',
            'false',
            'maybe',
          ],
      },
      {
          'The DLR control-VMs create automatic DRS rules?': [
            'false',
            'true',
            'maybe',
          ],
      },
      {
          'The nsx controllers create automatic DRS rules?': [
            'false',
            'true',
            'maybe',
          ],
      },
      {
          'The ESG Utilises what HA heartbeat type?': [
            'layer 2',
            'layer 3',
            'layer 1',
            'layer 4',
          ],
      },
      {
          'the DLR control-VM is utilised when?': [
            'during dynamic routing',
            'with static routing',
            'to distribute the vxlan state information',
          ],
      },
      {
          'the dfw rules are applied at the vNIC level?': [
            'true',
            'false',
            'maybe',
          ],
      },
      {
          'The NSX Manager is required for the network function to remain operational?': [
            'false',
            'true',
            'maybe',
          ],
      },
      {
          'The NSX Manager is required for the API function to remain operational?': [
            'true',
            'false',
            'maybe',
          ],
      },
      {
          'A transport zone can span multiple distributed switches?': [
              'true',
              'false',
              'maybe',
          ],
      },
      {
          'what is the recommended MTU requirement?': [
              '1600 bytes',
              '9000 bytes',
              '1500 bytes',
              '1522 bytes',
          ],
      },
      {
          'In a cross-VC deployment how many NSX managers can you deploy?': [
              'up to 8',
              'up to 2',
              'up to 10',
              'up to 4',
          ],
      },
      {
          'In a cross-VC deployment how many primary NSX managers can you deploy?': [
              'up to 1',
              'up to 2',
              'up to 4',
              'up to 8',
              'up to 7',
          ],
      },
      {
          'In a cross-VC deployment how many secondary NSX managers can you deploy?': [
              'up to 7',
              'up to 2',
              'up to 4',
              'up to 8',
              'up to 1',
          ],
      },
      {
          'is the universal synchronisation service on by default?': [
              'no',
              'yes',
              'maybe',
          ],
      },
      {
          'In a cross-VC deployment how many universal firewall sections can you have?': [
              'one in an NSX 6.2 deployment, and multiple in an NSX 6.3 or higher deployment',
              'multiple in an NSX 6.2 deployment, and one in an NSX 6.3 or higher deployment',
              'only one',
              'multiple',
          ],
      },
      {
          'In a cross-VC deployment how many universal transzport zones can you have?': [
              'only one',
              'one in an NSX 6.2 deployment, and multiple in an NSX 6.3 or higher deployment',
              'multiple in an NSX 6.2 deployment, and one in an NSX 6.3 or higher deployment',
              'multiple',
          ],
      },
      {
          'can you utilise vcenter concepts in universal firewall rules?': [
            'no',
            'yes',
            'maybe',
          ],
      },
      {
          'What is the purpose of Locale-ID?': [
            'It is utilised in in a cross-vc deployment to define the local egress path',
            'It is utilised in in a cross-vc deployment to define the local ingress path',
            'It is utilised in in a NSX deployment to define the local egress path',
            'It is utilised in in a NSX deployment to define the local ingress path',
          ],
      },
      {
          'Where can the Locale-ID be changed?': [
            'At the cluster level, host level and DLR',
            'At the cluster level, host level, DLR and Static Route',
            'At the cluster level and host level only',
            'At the cluster level only',
          ],
      },
      {
          'What are the VIBs that are installed on a host in an NSX domain?': [
            'In NSX 6.2, esx-vsip and esx-vxlan. In NSX 6.3, esx-nsxv',
            'esx-vxip and esx-vxlan',
            'esx-vsip and esx-nsv',
            'esx-nsxv',
          ],
      },

      {
            'How many chickens does Hans have?': [
                'To many to count',
                '1,200',
                '5,000',
                '700',
                '1,000',
                '3,000',
            ],
        },
        {
            'How many NSX controllers can you have?': [
                'no more than three',
        'one',
        'two',
        'three',
        'three or more',
            ],
        },
        {
          'The SSL VPN Plus Services allows what?': [
                'client and web based remote access',
                'client based remote access',
                'web based remote access',
                'IPSEC secure remote access',
                'support for no more than 50 users',
            ],
        },
        {
          'Which service is provided by a virtual machine workload?': [
                'edge services gateway',
                'logical switch',
                'distributed firewall',
                'distributed logical router',
            ],
        },
        {
            'What routing protocols are available in NSX?': [
                'OSPF and BGP',
                'BGP',
                'ISIS',
                'RIP',
            ],
        },
      {
            'How many chickens does Hans have?': [
                'To many to count',
                '1,200',
                '5,000',
                '700',
                '1,000',
                '3,000',
            ],
        },
        {
            'How many NSX controllers can you have?': [
                'no more than three',
				'one',
				'two',
				'three',
				'three or more',
            ],
        },
        {
            'What routing protocols are available in NSX?': [
                'OSPF and BGP',
                'BGP',
                'ISIS',
                'RIP',
            ],
        },
    ],
    QUESTIONS_EN_US: [
      {
          'which of the following does the controller cluster contain?': [
              'vtep table, arp table and mac table',
              'dns',
              'vtep table',
              'arp table',
              'mac table',
          ],
      },
      {
            'How many chickens does Hans have?': [
                'To many to count',
                '1,200',
                '5,000',
                '700',
                '1,000',
                '3,000',
            ],
        },
        {
            'When a DLR instance is in bridge mode which is correct?': [
                'The Bridging instance is the host with the control VM for that instance of DLR',
                'The Bridging instance is based on the host with most number of controllers',
                'The Bridging instance is not required for bridging, only distributed firewall functionality',
            ],
        },
        {
            'the dfw utilises the controllers to function?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            ' Which of the following vXLAN replication modes offloads local replication using multicast with remote being unicast?': [
              'hybrid',
              'multicast',
              'unicast',
            ],
        },
        {
            'Which of the following functions allow 3rd party extensibility?': [
              'service composer',
              'service designer',
              'VCNS',
              'DFW',
            ],
        },
        {
            'A NSX Controller is installed into the hypervisor as a kernel mode  module using a VIB': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'multicast replication mode requires controllers?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'an NSX manager backup from an older version can be restored after an upgrade?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'the ESG can be upgrade/downgraded in size without impacting the configuration?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'unicast replicaiton mode requires controllers?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'the DLR LIF VMAC is the same per host?': [
              'true',
              'false',
              'sometimes',
            ],
        },
        {
            'which of the following destinations can be used for NSX Manager backups?': [
              'sFTP and FTP',
              'TFTP',
              'CIFS',
              'SFTP',
              'FTP',
            ],
        },
        {
            'hybrid replicaiton mode requires controllers?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'the dfw exists in the VM Kernel?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'the dfw rules are independent of VXLAN and VLAN?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'The DFW supports L7 application rules?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'The dLR can exist in which of the following modes?': [
              'bridging and routing modes',
              'bridging mode',
              'routing mode',
              'switching mode',
            ],
        },
        {
            'which nsx component prevents hair pinning?': [
              'dlr',
              'esg',
              'vxlan',
            ],
        },
        {
            'The DFW supports L2-4  rules?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'The DLR control-VMs create automatic DRS rules?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'The nsx controllers create automatic DRS rules?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'The ESG Utilises what HA heartbeat type?': [
              'layer 2',
              'layer 3',
              'layer 1',
              'layer 4',
            ],
        },
        {
            'the DLR control-VM is utilised when?': [
              'during dynamic routing',
              'with static routing',
              'to distribute the vxlan state information',
            ],
        },
        {
            'the dfw rules are applied at the vNIC level?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'The NSX Manager is required for the network function to remain operational?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'The NSX Manager is required for the API function to remain operational?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'A transport zone can span multiple distributed switches?': [
                'true',
                'false',
                'maybe',
            ],
        },
        {
            'what is the recommended MTU requirement?': [
                '1600 bytes',
                '9000 bytes',
                '1500 bytes',
                '1522 bytes',
            ],
        },
        {
            'In a cross-VC deployment how many NSX managers can you deploy?': [
                'up to 8',
                'up to 2',
                'up to 10',
                'up to 4',
            ],
        },
        {
            'In a cross-VC deployment how many primary NSX managers can you deploy?': [
                'up to 1',
                'up to 2',
                'up to 4',
                'up to 8',
                'up to 7',
            ],
        },
        {
            'In a cross-VC deployment how many secondary NSX managers can you deploy?': [
                'up to 7',
                'up to 2',
                'up to 4',
                'up to 8',
                'up to 1',
            ],
        },
        {
            'is the universal synchronisation service on by default?': [
                'no',
                'yes',
                'maybe',
            ],
        },
        {
            'In a cross-VC deployment how many universal firewall sections can you have?': [
                'one in an NSX 6.2 deployment, and multiple in an NSX 6.3 or higher deployment',
                'multiple in an NSX 6.2 deployment, and one in an NSX 6.3 or higher deployment',
                'only one',
                'multiple',
            ],
        },
        {
            'In a cross-VC deployment how many universal transzport zones can you have?': [
                'only one',
                'one in an NSX 6.2 deployment, and multiple in an NSX 6.3 or higher deployment',
                'multiple in an NSX 6.2 deployment, and one in an NSX 6.3 or higher deployment',
                'multiple',
            ],
        },
        {
            'can you utilise vcenter concepts in universal firewall rules?': [
              'no',
              'yes',
              'maybe',
            ],
        },
        {
            'What is the purpose of Locale-ID?': [
              'It is utilised in in a cross-vc deployment to define the local egress path',
              'It is utilised in in a cross-vc deployment to define the local ingress path',
              'It is utilised in in a NSX deployment to define the local egress path',
              'It is utilised in in a NSX deployment to define the local ingress path',
            ],
        },
        {
            'Where can the Locale-ID be changed?': [
              'At the cluster level, host level and DLR',
              'At the cluster level, host level, DLR and Static Route',
              'At the cluster level and host level only',
              'At the cluster level only',
            ],
        },
        {
            'What are the VIBs that are installed on a host in an NSX domain?': [
              'In NSX 6.2, esx-vsip and esx-vxlan. In NSX 6.3, esx-nsxv',
              'esx-vxip and esx-vxlan',
              'esx-vsip and esx-nsv',
              'esx-nsxv',
            ],
        },

        {
              'How many chickens does Hans have?': [
                  'To many to count',
                  '1,200',
                  '5,000',
                  '700',
                  '1,000',
                  '3,000',
              ],
          },
          {
              'How many NSX controllers can you have?': [
                  'no more than three',
  				'one',
  				'two',
  				'three',
  				'three or more',
              ],
          },
          {
            'The SSL VPN Plus Services allows what?': [
                  'client and web based remote access',
                  'client based remote access',
                  'web based remote access',
                  'IPSEC secure remote access',
                  'support for no more than 50 users',
              ],
          },
          {
            'Which service is provided by a virtual machine workload?': [
                  'edge services gateway',
                  'logical switch',
                  'distributed firewall',
                  'distributed logical router',
              ],
          },
          {
              'What routing protocols are available in NSX?': [
                  'OSPF and BGP',
                  'BGP',
                  'ISIS',
                  'RIP',
              ],
          },
        {
            'How many NSX controllers can you have?': [
                'no more than three',
				'one',
				'two',
				'three',
				'three or more',
            ],
        },
        {
            'What routing protocols are available in NSX?': [
                'OSPF and BGP',
                'BGP',
                'ISIS',
                'RIP',
            ],
        },
    ],
    QUESTIONS_EN_IN: [
        {
            'which of the following does the controller cluster contain?': [
                'vtep table, arp table and mac table',
                'dns',
                'vtep table',
                'arp table',
                'mac table',
            ],
        },
        {
            'When a DLR instance is in bridge mode which is correct?': [
                'The Bridging instance is the host with the control VM for that instance of DLR',
                'The Bridging instance is based on the host with most number of controllers',
                'The Bridging instance is not required for bridging, only distributed firewall functionality',
            ],
        },
        {
            'the dfw utilises the controllers to function?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            ' Which of the following vXLAN replication modes offloads local replication using multicast with remote being unicast?': [
              'hybrid',
              'multicast',
              'unicast',
            ],
        },
        {
            'Which of the following functions allow 3rd party extensibility?': [
              'service composer',
              'service designer',
              'VCNS',
              'DFW',
            ],
        },
        {
            'A NSX Controller is installed into the hypervisor as a kernel mode  module using a VIB?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'multicast replication mode requires controllers?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'an NSX manager backup from an older version can be restored after an upgrade?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'the ESG can be upgrade/downgraded in size without impacting the configuration?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'unicast replicaiton mode requires controllers?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'the DLR LIF VMAC is the same per host?': [
              'true',
              'false',
              'sometimes',
            ],
        },
        {
            'which of the following destinations can be used for NSX Manager backups?': [
              'sFTP and FTP',
              'TFTP',
              'CIFS',
              'SFTP',
              'FTP',
            ],
        },
        {
            'hybrid replicaiton mode requires controllers?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'the dfw exists in the VM Kernel?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'the dfw rules are independent of VXLAN and VLAN?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'The DFW supports L7 application rules?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'The dLR can exist in which of the following modes?': [
              'bridging and routing modes',
              'bridging mode',
              'routing mode',
              'switching mode',
            ],
        },
        {
            'which nsx component prevents hair pinning?': [
              'dlr',
              'esg',
              'vxlan',
            ],
        },
        {
            'The DFW supports L2-4  rules?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'The DLR control-VMs create automatic DRS rules?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'The nsx controllers create automatic DRS rules?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'The ESG Utilises what HA heartbeat type?': [
              'layer 2',
              'layer 3',
              'layer 1',
              'layer 4',
            ],
        },
        {
            'the DLR control-VM is utilised when?': [
              'during dynamic routing',
              'with static routing',
              'to distribute the vxlan state information',
            ],
        },
        {
            'the dfw rules are applied at the vNIC level?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'The NSX Manager is required for the network function to remain operational?': [
              'false',
              'true',
              'maybe',
            ],
        },
        {
            'The NSX Manager is required for the API function to remain operational?': [
              'true',
              'false',
              'maybe',
            ],
        },
        {
            'A transport zone can span multiple distributed switches?': [
                'true',
                'false',
                'maybe',
            ],
        },
        {
            'what is the recommended MTU requirement?': [
                '1600 bytes',
                '9000 bytes',
                '1500 bytes',
                '1522 bytes',
            ],
        },
        {
            'In a cross-VC deployment how many NSX managers can you deploy?': [
                'up to 8',
                'up to 2',
                'up to 10',
                'up to 4',
            ],
        },
        {
            'In a cross-VC deployment how many primary NSX managers can you deploy?': [
                'up to 1',
                'up to 2',
                'up to 4',
                'up to 8',
                'up to 7',
            ],
        },
        {
            'In a cross-VC deployment how many secondary NSX managers can you deploy?': [
                'up to 7',
                'up to 2',
                'up to 4',
                'up to 8',
                'up to 1',
            ],
        },
        {
            'is the universal synchronisation service on by default?': [
                'no',
                'yes',
                'maybe',
            ],
        },
        {
            'In a cross-VC deployment how many universal firewall sections can you have?': [
                'one in an NSX 6.2 deployment, and multiple in an NSX 6.3 or higher deployment',
                'multiple in an NSX 6.2 deployment, and one in an NSX 6.3 or higher deployment',
                'only one',
                'multiple',
            ],
        },
        {
            'In a cross-VC deployment how many universal transzport zones can you have?': [
                'only one',
                'one in an NSX 6.2 deployment, and multiple in an NSX 6.3 or higher deployment',
                'multiple in an NSX 6.2 deployment, and one in an NSX 6.3 or higher deployment',
                'multiple',
            ],
        },
        {
            'can you utilise vcenter concepts in universal firewall rules?': [
              'no',
              'yes',
              'maybe',
            ],
        },
        {
            'What is the purpose of Locale-ID?': [
              'It is utilised in in a cross-vc deployment to define the local egress path',
              'It is utilised in in a cross-vc deployment to define the local ingress path',
              'It is utilised in in a NSX deployment to define the local egress path',
              'It is utilised in in a NSX deployment to define the local ingress path',
            ],
        },
        {
            'Where can the Locale-ID be changed?': [
              'At the cluster level, host level and DLR',
              'At the cluster level, host level, DLR and Static Route',
              'At the cluster level and host level only',
              'At the cluster level only',
            ],
        },
        {
            'What are the VIBs that are installed on a host in an NSX domain?': [
              'In NSX 6.2, esx-vsip and esx-vxlan. In NSX 6.3, esx-nsxv',
              'esx-vxip and esx-vxlan',
              'esx-vsip and esx-nsv',
              'esx-nsxv',
            ],
        },
  
        {
              'How many chickens does Hans have?': [
                  'To many to count',
                  '1,200',
                  '5,000',
                  '700',
                  '1,000',
                  '3,000',
              ],
          },
          {
              'How many NSX controllers can you have?': [
                  'no more than three',
          'one',
          'two',
          'three',
          'three or more',
              ],
          },
          {
            'The SSL VPN Plus Services allows what?': [
                  'client and web based remote access',
                  'client based remote access',
                  'web based remote access',
                  'IPSEC secure remote access',
                  'support for no more than 50 users',
              ],
          },
          {
            'Which service is provided by a virtual machine workload?': [
                  'edge services gateway',
                  'logical switch',
                  'distributed firewall',
                  'distributed logical router',
              ],
          },
          {
              'What routing protocols are available in NSX?': [
                  'OSPF and BGP',
                  'BGP',
                  'ISIS',
                  'RIP',
              ],
          },
        {
              'How many chickens does Hans have?': [
                  'To many to count',
                  '1,200',
                  '5,000',
                  '700',
                  '1,000',
                  '3,000',
              ],
          },
          {
              'How many NSX controllers can you have?': [
                  'no more than three',
                  'one',
                  'two',
                  'three',
                  'three or more',
              ],
          },
          {
              'What routing protocols are available in NSX?': [
                  'OSPF and BGP',
                  'BGP',
                  'ISIS',
                  'RIP',
              ],
          },
      ],
};
