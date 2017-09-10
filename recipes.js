/* eslint-disable  func-names */
/* eslint-disable max-len */
/* eslint quote-props: ['error', 'consistent']*/
module.exports = {
    'RECIPE_EN_GB': {
/* PPSP */
        'PPSP': 'PPSP stands for Partner Professional Service Program',
        'PPSP Tiers': 'There are three tiers in the program, Professional, Enterprise and Premier',
        'PPSP Contact': 'ppsp@vmware.com',
        'livefire contact': 'livefire@vmware.com',
        'PPSP Benefits': 'If you are a Enterprise or Premier partner you can access the Solution Architecture Mentoring Service',
/* Core components */
        'nsx manager': 'There is a 1:1 mapping of the NSX managers to vcenters, and in a multi-site deployment you have a single primary NSX manager, and up to seven secondary NSX managers. In addition the NSX Managers store the firewall information for the NSX domain',
        'controller': 'An NSX controller provides the control plane for the NSX domain. It stores control plane related information for routing and switching e.g. VTEP Table, MAC and ARP Table, and DLR Routing Information. A core benefit of the controllers is that they remove the requirement for multicast within a VXLAN, and they provide ARP supression. Also, the only VXLAN-related data that’s proactively pushed from Controllers to hosts is a list of VTEPs for each VNI. All other info has to be requested by host.',
        'universal controller': 'An NSX controller provides the control plane for the NSX domain when utilising a multi-site deployment. As the Universal Controller Cluster manages both Universal and Local objects the local Segment ID Pools need to be unique across NSX Managers',
        'user world agents': 'there are two key user world agents, NETCPA and vSFWD',
        'NETCPA': 'NETCPA is an SSL client that communicates from the hosts to the NSX controllers. It mediates between the hypervisor kernel modules and the NSX controllers.',
        'vSFWD': 'vSFWD is an SSL client that communicates between the hosts and the NSX Manager',
        'MTU': 'minimum MTU support of 1600 bytes is required on the underlay',
        'CDO': 'controller disconnected mode is when all hosts lose connectivity to the controllers, and a special CDO logical switch is utilised to handle BUM traffic replication',
        'host provisioning': 'When hosts are provisioined you are installing the associated VIBs, and kernel modules to support NSX services',
/* distributed routing */
        'logical router': 'The DLR, or distributed logical router, provides routing function east/west within the NSX domain',
        'universal logical routers': 'This is the same as a logical router, but is defined within a multi-site deployment to cover routing between universal switches. Only universal switches and ESG internal links can be connected to this router type',
        'control-VM': 'The control-VM is utilised when enabling dynamic routing on the distributed logical router, and can be deployed in a HA mode',
        'number of DLR LIFs': 'upto 1000',
        'LIF ARP Table': 'arp table is maintained per lif',
        'vmac': 'this is the same across all the hosts, and is never seen by the phyiscal network. This is used as the default gateway by the VMs',
        'distributed router dynamic routing': 'The DLR supports BGP and OSPF. When configuring dynamic routing on the DLR two IPs are defined, the protocol address and the forwarding address. The protocol address is assocaited with the control-VM for the control plane, and the forwarding address is the IP as seen in the data path. Both these IPs should be on the same IP subnet',
        'protocol address': 'This is the IP address associated with the control-VM, and is used for any neighbour configuration in BGP, or utilised in OSPF as part of the OSPF broadcast learning process and DR/BDR election',
        'forwarding address': 'this is the IP address used as the next hop for traffic',
        'OSPF Areas': 'NSX supports stanard and NSSA areas only, this is because in these areas the protocol address can be manipulated and changed, thus supporting the control-VM and protocol address concept',
        'BGP': 'NSX fully supports iBGP and eBGP.',
        'ECMP': 'equal cost multipathing is fully supported in NSX. We can have up to 8 ECMP paths defined',
/* switching */
        'VDS': 'essential component for NSX, and is utilised to define the port groups which constitue the VXLAN',
        'transport zone': 'the span of the vxlan is defined by the transport zone. You can have multiple transport zones per NSX domain, and a cluster can be part of more than one transport zone',
        'VTEP load balancing': 'recommended to utilise route based on source ID. In the UI this is seen as load balanced based on route ID',
        'VTEP Configuration': 'VTEP subnet allocation is based on teh underlyig L2 or L2 network topology. VTEP subnet will be same for all hosts in a L2 fabric, and therefore you can use IP Pool allocation. Or, in a L3 fabric the subnet will be different, and DHCP IP allocation is recommended.',
        'replication mode': 'NSX supports three repliction modes, unicast, multicast and hybrid mode',
        'unicast mode': 'All replication occurs using unicast. Applicable to small deployment',
        'multicast mode': 'Entire replication is off-loaded to physical network. Requires IGMP/Querier & and multicast routing for L3(PIM)',
        'hybrid mode': 'Local replication offloaded to physical network, while remote replication occurs via unicast. Most practical without the complexity of multicast mode. Only requires IGMP Snooping/Querier. Does not require L3 PIM.',
        'vxlan': 'An encapsulation technology utilised to provide the logical switching capability within NSX',
        'universal logical switches': 'This is the same as logical switches, but is defined within a multi-site deployment to cover logical switches that span multiple NSX domains',
        'logical switch': 'Provides distributed layer 2 services within the NSX domain, and is a glorified port group defined on a distributed virtual switch',
        'VTEP Report': 'When a VM is powered up on a host, the host informs the controllers that it is joining the VTEP group. The controllers then inform all hosts that are part of that VTEP with the new hosts VTEP IP. Once completed a MAC report begins for the VM that joined the VXLAN',
        'MAC report': 'The host stores the VM MAC and VNI mapping information, and sends this to the NSX controllers',
        'IP report': 'The host learns the VM IP either via DHCP snooping, or through the VMs arp requests. the host stores the VM IP with the MAC and VNI information. It then sends the VM IP information to the NSX controllers',
        'ARP Request': 'When a VM tries to communicate with another VM an ARP request is performed. , SwSec dvFilter is responsible for 1. Intercepting VM’s ARP request 2. Reporting VM’s IP to the Controller 3. Checking for answer to VM’s ARP request in local ARP cache4. If nothing is found, asking Controller if it has an ARP reply 5. Storing Controller’s answer in a local ARP cache',
/* Security */
        'NSX Security Framework': 'The framework consists of three components. Isolation through logical switchign and routing, segmentation through the distributed firewall and Edge firewall, and finally, segmentation with advanced services utilising the the NSX partner services i.e. Network and Guest Introspection services.',
        'distributed firewall': 'Provides security for east west traffic within the NSX domain, can inspect Layer 2 to Layer 4 services. The biggest benefit of the NS firewall services is its ability to utilise vcenter constructs. In addition, during a vmotion event all DFW rules and connection table information, i.e. security context of the VM is migrated wtih the VM.',
        'guest introspection': 'VMware services include activity monitroing and identify firewalling, 3rd party services include Agentless Antivirus and File Integrity checking.',
        'network introspection': '3rd party services include IPS, IDS and Next generation firewalling services for inspection application traffic',
        'DFW Packet Walk': '1. lookup is performed on the connection table for existing flow 2. if no flow, rule table is checked to confirm traffic is permitted 3. if permitted, traffic is passed and connection tracket table is updated 4. all additional flows are permitted',
        'vcenter objects': 'all vcenter objects can be utilised in security rules, except folders. To achieve this VMtools is required, but if not installed on the VM we can perform IP discovery using DHCP and ARP Snooping',
        'security groups': 'allows abstraction and grouping of workload VMs. Can compirse of IPSET, Logical Switch, Clusters and vNIC. This allows security policies to be applicaiton centric. VMs can be statically or dynamically defined against security groups',
        'security tags': 'utilised by vmware and 3rd party solutions. They can be manually or dynamically assigned. Can be utilised to defined group membership',
        'Applied to Field': 'this is utilised to efficiently apply firewall rules to VMs or objects in question',
        'Application Rule Manager': 'allows you to define up to 5 simultaneous sessions, with 30 vNICs per session. It leverages flow monitoring to monitor incoming and outgoing flows. You can then define firewall rules based on this. A perfect use case is for point in time security profiling',
        'service composer': 'Service composer decouples workloads from undelying topology by grouping based on vcenter objects. you can then automate the enforcement of security policies based on the association of the securtiy groups with security policies.',
        'endpoint monitoring': 'Allows an application owner to profile their application and determine the processes making network connections. Note this is limited to windows only',
/* ESG */
        'lacp mlag': 'link aggregation technologies are not recommended in an NSX environment',
        'esg': 'An ESG, or edge services gateway, provides routing for north/south,  and network virtualisation services, such as load balancing or VPN services.',
        'ESG routing design': 'ESGs reside at the edge of the network and should not act as a transport nework',
        'ESG Sizing': 'start with large ESG and size up or down as required',
/*physical integration */
        'HSC hardware switch controller': 'The Hardware Switch Controller (HSC) is the entity to which the NSX controller connects in order to control Hardware switches. The association HSC/NSX Controller is setup manually by the operatorThe HSC runs an OVSDB server. The NSX controller runs an OVSDB client that connects to the server on the HSC. The HSC can run on a Hardware Switch itself. Or it can be a separate appliance responsible for several Hardware Switches. The HSC is responsible for advertising the physical bridges and ports',
        'HSC Advertise': 'HSC advertises physical bridges and ports. This is the address of the VTEPs on the physical switches and MAC addresses learnt on physical ports',
        'RSN Replicaiton Service Node': 'The hardware gateway wont replicate BUM traffic. Hypervisors are defined as Replicaiton Services Nodes (RSN). BUM traffic is load balanced across multiple RSNs. Once received by the RSN the hypervisor handles it according to teh NSX replication mode. RSNs are protected by BFD',
        'physical to virtual integration': 'you can utilise bridging or routing to support connectivity to the physical estate',
        'physical routing integration': 'this is achieved using the NSX Edges, this is to limit the scope of the physical vlans to the edge cluster',
        'physical briding integration': 'this is achieved by either using hardware VTEP L2 gateways, or via software bridging on the DLR',
/* Cross-VC */
        'NSX Manager standard role': 'Default option for new installation or upgrade. All objects in a Standalone NSX Manager are local',
        'NSX Manager Primary': 'One NSX Manager per Cross VC NSX deployment is assigned the Primary role. Deploys and manages the Universal Controller Cluster and any Universal objects',
        'NSX Manager Secondary': 'The Secondary role is assigned when adding a Standalone NSX Manager to a Primary. Universal objects from the primary are synchronized to the Secondary where they are read-only',
        'NSX Manager Transit': 'Temporary role used when an NSX Manager has a Primary or Secondary Role removed. If universal objects still exist the NSX Manager is assigned a Transit role until these objects are deleted then it can move to a Standalone role',
        'Universal Transport Zone': 'Universal Transport Zones can contain clusters across different vCenter Servers. You can only have one universal transport zone',
        'Universal Segment ID': 'only one Universal Segment ID pool and Multicast Address range is supported. Segment ID Pools are validated on Secondary NSX Managers when they are added to a Primary, and the registration will will fail if overlapping pools are detected',
        'Universal Synchronisation Service': 'Manages syncing of any universal objects created on primary NSX manager to all secondary NSX managers. Sync runs on on demand and on a periodic basis to ensure consistency. Performs differential between Primary and Secondary NSX Managers and synchronizes the differences',
        'Locale-ID': 'utilised in local egress deployments to inject local based routes into the host',
        'Universal Object Creation': 'can only be created or modified on the primary NSX manager',
        'local objects': 'can be created directly on the relevant NSX Manager',
        'cross-vc design': '150ms RTT between NSX Managers. WAN capable of supporting MTU 1600 bytes or higher. NSX Manager  resources increased to 8 vCPU and 24GB ram. Univrsal logical switches can only be connected to universal logical routers. Software or Hardware bridging is not supported. NSX controller, UDLR control-VM and ESG migration across vCenter servers is not supported. Service composer, spoofguard, ESG firewall integration and Netx are not supported with Cross-VC',
        'universal firewall section': 'you can have multiple universal firewall sections',
        'universal firewall rules': 'these rules are based on IP, MAC sets and universal security groups only. other vcenter objects cannot be utilised',
/* SRM and NSX */
        'NSX and SRM': 'NSX and SRM allow for better cross-site disaster recovery and business continuity. This is achieved through support for universal routing/switching and firewall constructs. automated network mapping is supported if using array based replication. ',
/* Arch and Design */
        'Vsphere HA': 'vsphere HA can be utilised across the NSX Manager, Controller, Control-VM and ESG components',
        'Anti-Affinity Rules': 'vsphere HA anti-affinity rules should be utilised to keep NSX controllers or ECMP ESGs running on separate hosts. Control-VMs deployed in HA mode automatically have anti-affinity rules defined.',
  },
    'RECIPE_EN_US': {
/* PPSP */
        'PPSP': 'PPSP stands for Partner Professional Service Program',
        'PPSP Tiers': 'There are three tiers in the program, Professional, Enterprise and Premier',
        'PPSP Contact': 'ppsp@vmware.com',
        'livefire contact': 'livefire@vmware.com',
        'PPSP Benefits': 'If you are a Enterprise or Premier partner you can access the Solution Architecture Mentoring Service',
/* Core components */
        'nsx manager': 'There is a 1:1 mapping of the NSX managers to vcenters, and in a multi-site deployment you have a single primary NSX manager, and up to seven secondary NSX managers. In addition the NSX Managers store the firewall information for the NSX domain',
        'controller': 'An NSX controller provides the control plane for the NSX domain. It stores control plane related information for routing and switching e.g. VTEP Table, MAC and ARP Table, and DLR Routing Information. A core benefit of the controllers is that they remove the requirement for multicast within a VXLAN, and they provide ARP supression. Also, the only VXLAN-related data that’s proactively pushed from Controllers to hosts is a list of VTEPs for each VNI. All other info has to be requested by host.',
        'universal controller': 'An NSX controller provides the control plane for the NSX domain when utilising a multi-site deployment. As the Universal Controller Cluster manages both Universal and Local objects the local Segment ID Pools need to be unique across NSX Managers',
        'user world agents': 'there are two key user world agents, NETCPA and vSFWD',
        'NETCPA': 'NETCPA is an SSL client that communicates from the hosts to the NSX controllers. It mediates between the hypervisor kernel modules and the NSX controllers.',
        'vSFWD': 'vSFWD is an SSL client that communicates between the hosts and the NSX Manager',
        'MTU': 'minimum MTU support of 1600 bytes is required on the underlay',
        'CDO': 'controller disconnected mode is when all hosts lose connectivity to the controllers, and a special CDO logical switch is utilised to handle BUM traffic replication',
        'host provisioning': 'When hosts are provisioined you are installing the associated VIBs, and kernel modules to support NSX services',
/* distributed routing */
        'logical router': 'The DLR, or distributed logical router, provides routing function east/west within the NSX domain',
        'universal logical routers': 'This is the same as a logical router, but is defined within a multi-site deployment to cover routing between universal switches. Only universal switches and ESG internal links can be connected to this router type',
        'control-VM': 'The control-VM is utilised when enabling dynamic routing on the distributed logical router, and can be deployed in a HA mode',
        'number of DLR LIFs': 'upto 1000',
        'LIF ARP Table': 'arp table is maintained per lif',
        'vmac': 'this is the same across all the hosts, and is never seen by the phyiscal network. This is used as the default gateway by the VMs',
        'distributed router dynamic routing': 'The DLR supports BGP and OSPF. When configuring dynamic routing on the DLR two IPs are defined, the protocol address and the forwarding address. The protocol address is assocaited with the control-VM for the control plane, and the forwarding address is the IP as seen in the data path. Both these IPs should be on the same IP subnet',
        'protocol address': 'This is the IP address associated with the control-VM, and is used for any neighbour configuration in BGP, or utilised in OSPF as part of the OSPF broadcast learning process and DR/BDR election',
        'forwarding address': 'this is the IP address used as the next hop for traffic',
        'OSPF Areas': 'NSX supports stanard and NSSA areas only, this is because in these areas the protocol address can be manipulated and changed, thus supporting the control-VM and protocol address concept',
        'BGP': 'NSX fully supports iBGP and eBGP.',
        'ECMP': 'equal cost multipathing is fully supported in NSX. We can have up to 8 ECMP paths defined',
/* switching */
        'VDS': 'essential component for NSX, and is utilised to define the port groups which constitue the VXLAN',
        'transport zone': 'the span of the vxlan is defined by the transport zone. You can have multiple transport zones per NSX domain, and a cluster can be part of more than one transport zone',
        'VTEP load balancing': 'recommended to utilise route based on source ID. In the UI this is seen as load balanced based on route ID',
        'VTEP Configuration': 'VTEP subnet allocation is based on teh underlyig L2 or L2 network topology. VTEP subnet will be same for all hosts in a L2 fabric, and therefore you can use IP Pool allocation. Or, in a L3 fabric the subnet will be different, and DHCP IP allocation is recommended.',
        'replication mode': 'NSX supports three repliction modes, unicast, multicast and hybrid mode',
        'unicast mode': 'All replication occurs using unicast. Applicable to small deployment',
        'multicast mode': 'Entire replication is off-loaded to physical network. Requires IGMP/Querier & and multicast routing for L3(PIM)',
        'hybrid mode': 'Local replication offloaded to physical network, while remote replication occurs via unicast. Most practical without the complexity of multicast mode. Only requires IGMP Snooping/Querier. Does not require L3 PIM.',
        'vxlan': 'An encapsulation technology utilised to provide the logical switching capability within NSX',
        'universal logical switches': 'This is the same as logical switches, but is defined within a multi-site deployment to cover logical switches that span multiple NSX domains',
        'logical switch': 'Provides distributed layer 2 services within the NSX domain, and is a glorified port group defined on a distributed virtual switch',
        'VTEP Report': 'When a VM is powered up on a host, the host informs the controllers that it is joining the VTEP group. The controllers then inform all hosts that are part of that VTEP with the new hosts VTEP IP. Once completed a MAC report begins for the VM that joined the VXLAN',
        'MAC report': 'The host stores the VM MAC and VNI mapping information, and sends this to the NSX controllers',
        'IP report': 'The host learns the VM IP either via DHCP snooping, or through the VMs arp requests. the host stores the VM IP with the MAC and VNI information. It then sends the VM IP information to the NSX controllers',
        'ARP Request': 'When a VM tries to communicate with another VM an ARP request is performed. , SwSec dvFilter is responsible for 1. Intercepting VM’s ARP request 2. Reporting VM’s IP to the Controller 3. Checking for answer to VM’s ARP request in local ARP cache4. If nothing is found, asking Controller if it has an ARP reply 5. Storing Controller’s answer in a local ARP cache',
/* Security */
        'NSX Security Framework': 'The framework consists of three components. Isolation through logical switchign and routing, segmentation through the distributed firewall and Edge firewall, and finally, segmentation with advanced services utilising the the NSX partner services i.e. Network and Guest Introspection services.',
        'distributed firewall': 'Provides security for east west traffic within the NSX domain, can inspect Layer 2 to Layer 4 services. The biggest benefit of the NS firewall services is its ability to utilise vcenter constructs. In addition, during a vmotion event all DFW rules and connection table information, i.e. security context of the VM is migrated wtih the VM.',
        'guest introspection': 'VMware services include activity monitroing and identify firewalling, 3rd party services include Agentless Antivirus and File Integrity checking.',
        'network introspection': '3rd party services include IPS, IDS and Next generation firewalling services for inspection application traffic',
        'DFW Packet Walk': '1. lookup is performed on the connection table for existing flow 2. if no flow, rule table is checked to confirm traffic is permitted 3. if permitted, traffic is passed and connection tracket table is updated 4. all additional flows are permitted',
        'vcenter objects': 'all vcenter objects can be utilised in security rules, except folders. To achieve this VMtools is required, but if not installed on the VM we can perform IP discovery using DHCP and ARP Snooping',
        'security groups': 'allows abstraction and grouping of workload VMs. Can compirse of IPSET, Logical Switch, Clusters and vNIC. This allows security policies to be applicaiton centric. VMs can be statically or dynamically defined against security groups',
        'security tags': 'utilised by vmware and 3rd party solutions. They can be manually or dynamically assigned. Can be utilised to defined group membership',
        'Applied to Field': 'this is utilised to efficiently apply firewall rules to VMs or objects in question',
        'Application Rule Manager': 'allows you to define up to 5 simultaneous sessions, with 30 vNICs per session. It leverages flow monitoring to monitor incoming and outgoing flows. You can then define firewall rules based on this. A perfect use case is for point in time security profiling',
        'service composer': 'Service composer decouples workloads from undelying topology by grouping based on vcenter objects. you can then automate the enforcement of security policies based on the association of the securtiy groups with security policies.',
        'endpoint monitoring': 'Allows an application owner to profile their application and determine the processes making network connections. Note this is limited to windows only',
/* ESG */
        'lacp mlag': 'link aggregation technologies are not recommended in an NSX environment',
        'esg': 'An ESG, or edge services gateway, provides routing for north/south,  and network virtualisation services, such as load balancing or VPN services.',
        'ESG routing design': 'ESGs reside at the edge of the network and should not act as a transport nework',
        'ESG Sizing': 'start with large ESG and size up or down as required',
/*physical integration */
        'HSC hardware switch controller': 'The Hardware Switch Controller (HSC) is the entity to which the NSX controller connects in order to control Hardware switches. The association HSC/NSX Controller is setup manually by the operatorThe HSC runs an OVSDB server. The NSX controller runs an OVSDB client that connects to the server on the HSC. The HSC can run on a Hardware Switch itself. Or it can be a separate appliance responsible for several Hardware Switches. The HSC is responsible for advertising the physical bridges and ports',
        'HSC Advertise': 'HSC advertises physical bridges and ports. This is the address of the VTEPs on the physical switches and MAC addresses learnt on physical ports',
        'RSN Replicaiton Service Node': 'The hardware gateway wont replicate BUM traffic. Hypervisors are defined as Replicaiton Services Nodes (RSN). BUM traffic is load balanced across multiple RSNs. Once received by the RSN the hypervisor handles it according to teh NSX replication mode. RSNs are protected by BFD',
        'physical to virtual integration': 'you can utilise bridging or routing to support connectivity to the physical estate',
        'physical routing integration': 'this is achieved using the NSX Edges, this is to limit the scope of the physical vlans to the edge cluster',
        'physical briding integration': 'this is achieved by either using hardware VTEP L2 gateways, or via software bridging on the DLR',
/* Cross-VC */
        'NSX Manager standard role': 'Default option for new installation or upgrade. All objects in a Standalone NSX Manager are local',
        'NSX Manager Primary': 'One NSX Manager per Cross VC NSX deployment is assigned the Primary role. Deploys and manages the Universal Controller Cluster and any Universal objects',
        'NSX Manager Secondary': 'The Secondary role is assigned when adding a Standalone NSX Manager to a Primary. Universal objects from the primary are synchronized to the Secondary where they are read-only',
        'NSX Manager Transit': 'Temporary role used when an NSX Manager has a Primary or Secondary Role removed. If universal objects still exist the NSX Manager is assigned a Transit role until these objects are deleted then it can move to a Standalone role',
        'Universal Transport Zone': 'Universal Transport Zones can contain clusters across different vCenter Servers. You can only have one universal transport zone',
        'Universal Segment ID': 'only one Universal Segment ID pool and Multicast Address range is supported. Segment ID Pools are validated on Secondary NSX Managers when they are added to a Primary, and the registration will will fail if overlapping pools are detected',
        'Universal Synchronisation Service': 'Manages syncing of any universal objects created on primary NSX manager to all secondary NSX managers. Sync runs on on demand and on a periodic basis to ensure consistency. Performs differential between Primary and Secondary NSX Managers and synchronizes the differences',
        'Locale-ID': 'utilised in local egress deployments to inject local based routes into the host',
        'Universal Object Creation': 'can only be created or modified on the primary NSX manager',
        'local objects': 'can be created directly on the relevant NSX Manager',
        'cross-vc design': '150ms RTT between NSX Managers. WAN capable of supporting MTU 1600 bytes or higher. NSX Manager  resources increased to 8 vCPU and 24GB ram. Univrsal logical switches can only be connected to universal logical routers. Software or Hardware bridging is not supported. NSX controller, UDLR control-VM and ESG migration across vCenter servers is not supported. Service composer, spoofguard, ESG firewall integration and Netx are not supported with Cross-VC',
        'universal firewall section': 'you can have multiple universal firewall sections',
        'universal firewall rules': 'these rules are based on IP, MAC sets and universal security groups only. other vcenter objects cannot be utilised',
/* SRM and NSX */
        'NSX and SRM': 'NSX and SRM allow for better cross-site disaster recovery and business continuity. This is achieved through support for universal routing/switching and firewall constructs. automated network mapping is supported if using array based replication. ',
/* Arch and Design */
        'Vsphere HA': 'vsphere HA can be utilised across the NSX Manager, Controller, Control-VM and ESG components',
        'Anti-Affinity Rules': 'vsphere HA anti-affinity rules should be utilised to keep NSX controllers or ECMP ESGs running on separate hosts. Control-VMs deployed in HA mode automatically have anti-affinity rules defined.',
  },
};