'use strict';

module.exports = {
    /**
     * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
     * Make sure the first answer is the correct one. Set at least ANSWER_COUNT answers, any extras will be shuffled in.
     */
    QUESTIONS_EN_GB: [
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
            'How many NSX controllers can you have': [
                'no more than three',
				'one',
				'two',
				'three',
				'three or more',
            ],
        },
        {
            'What is the name of the the Top dog Chicken?': [
                'Pablo',
				'Spanish Peter',
				'Peter',
				'The Big Yellow Chicken',
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
            'How many NSX controllers can you have': [
                'no more than three',
				'one',
				'two',
				'three',
				'three or more',
            ],
        },
        {
            'What is the name of the the Top dog Chicken?': [
                'Pablo',
				'Spanish Peter',
				'Peter',
				'The Big Yellow Chicken',
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
