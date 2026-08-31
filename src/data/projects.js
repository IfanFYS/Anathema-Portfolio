export const projects = [
    {
        slug: "teep-prach-experiments",
        title: "O-RAN PRACH Security Experiments",
        desc: "Authorized PRACH attack and mitigation study across five Open RAN testbeds: OAI with USRP B210, mitigated OAI, OCUDU, Pegatron O-RU, and NVIDIA Aerial L1, measuring access behavior, resilience, and recovery limitations.",
        stack: "O-RAN, OAI, OCUDU, USRP B210, NVIDIA Aerial",
        tag: "5G Security",
        color: "#00FFFF",
        images: ["teep-experiments.png", "teep-results.png"],
        url: "https://drive.google.com/file/d/1CwLQ4RV1CR2pzqtmOWlOuNlYLsExw8W_/view?usp=sharing"
    },
    {
        slug: "oasis-water-purification",
        title: "O.A.S.I.S.",
        desc: "Portable off-grid water purification prototype for post-disaster deployment, combining reverse-osmosis filtration, ESP32 pH and turbidity sensing, automatic sanitation or drinking-water routing, offline monitoring, and a 12V battery system within a field-ready enclosure.",
        stack: "ESP32, IoT, Power Electronics, RO Filtration",
        tag: "Capstone",
        color: "#FACC15",
        images: ["oasis-1.png", "oasis-2.png"],
        url: "https://drive.google.com/file/d/1hE7kfNw0Bj2VAYfq66BVck-nr-Uzhmiy/view?usp=sharing"
    },
    {
        slug: "autoreject-blister",
        title: "Autoreject Blister",
        desc: "Pharmaceutical blister quality-control workstation combining PyQt, OpenCV, YOLO, and Arduino hardware, with editable regions and lanes, CLAHE preprocessing, per-lane counters, product master data, audit trails, and automated rejector control.",
        stack: "Python, PyQt5, OpenCV, YOLO, Arduino",
        tag: "Industry Vision",
        color: "#39FF14",
        images: ["autoreject-blister-1.png", "autoreject-blister-2.png"]
    },
    {
        slug: "qr-bpom-production-scan",
        title: "QR-BPOM Production Scan",
        desc: "Production scanning platform for BPOM UnitBox and MasterBox traceability, pairing a Next.js operator interface with a Go and PostgreSQL backend, WebSocket device events, duplicate and unreadable-QR handling, reset workflows, and monitoring fixes.",
        stack: "Next.js, Go, PostgreSQL, WebSocket, MUI",
        tag: "Industry System",
        color: "#1E88E5",
        images: ["QR-BPOM-1.png", "QR-BPOM-2.png"]
    },
    {
        slug: "wiki-scrolls",
        title: "WikiScrolls App",
        desc: "Short-form learning application that converts Wikipedia articles into personalized audiovisual feeds, combining a Flutter interface, MediaWiki ingestion, LLM summarization, text-to-speech playback, interaction tracking, search, profiles, and recommendation-driven discovery.",
        stack: "Flutter, Go, Neo4j, Docker, LLM",
        tag: "Flagship App",
        color: "#C46A2A",
        images: ["wiki-scrolls.png"],
        url: "https://drive.google.com/file/d/1B8zkb5kVQ2CDguev8laWwRd_AUcntkSD/view?usp=sharing"
    },
    {
        slug: "akpro-ime-web",
        title: "Akpro IME Web",
        desc: "Centralized academic hub for Universitas Indonesia engineering students, designed in Figma and built with Astro and TypeScript to organize course modules, schedules, curriculum information, peer resources, and frequently accessed academic services.",
        stack: "Astro, TypeScript, Figma",
        tag: "Web Platform",
        color: "#38BDF8",
        images: ["akpro-ime-web.png"],
        url: "https://www.akproime.com/"
    },
    {
        slug: "draw-battle-game",
        title: "Draw Battle Game",
        desc: "Real-time multiplayer drawing and guessing game with synchronized canvas events, room-based sessions, live chat, scoring, and PostgreSQL persistence, connecting a React client to an Express and Socket.io backend.",
        stack: "React, Express.js, PostgreSQL, Socket.io",
        tag: "Fullstack Game",
        color: "#A855F7",
        images: ["draw-battle-game.png"],
        url: "https://github.com/adriandikad2/DrawBattle"
    },
    {
        slug: "custom-linux-shell",
        title: "Custom Linux Shell",
        desc: "Unix-like command-line shell written in C, supporting program execution, foreground and background processes, built-in commands, inter-process communication, and multi-stage pipelines while practicing low-level process control and Linux system calls.",
        stack: "C, WSL",
        tag: "System",
        color: "#39FF14",
        images: ["custom-linux-shell.png"],
        url: "https://github.com/IfanFYS/Uni-Projects/tree/master/Sistem%20Operasi"
    },
    {
        slug: "aes-128-accelerator",
        title: "AES-128 Accelerator",
        desc: "FPGA accelerator for AES-128 encryption implemented in VHDL, covering core round transformations, key scheduling, simulation testbenches, and Quartus Prime synthesis to validate functional correctness and hardware-oriented performance.",
        stack: "VHDL, Quartus Prime",
        tag: "Hardware",
        color: "#9CA3AF",
        images: ["aes-128-accelerator-1.png", "aes-128-accelerator-2.png"],
        url: "https://github.com/mutiacasella/AES-Encryption-Hardware-Accelerator"
    },
    {
        slug: "network-design-sim",
        title: "Network Design & Sim",
        desc: "Campus and wide-area network designs created in Packet Tracer, applying VLAN segmentation, subnet planning, OSPF and EIGRP routing, plus Frame Relay and PPP links to model reliable headquarters-to-branch connectivity.",
        stack: "Packet Tracer, VLAN, OSPF, EIGRP",
        tag: "Network",
        color: "#2563EB",
        images: ["network-design-sim-1.png", "network-design-sim-2.png"],
        url: "https://github.com/IfanFYS/Uni-Projects/tree/master/Desain%20dan%20Manajemen%20Jaringan"
    },
    {
        slug: "smart-drop-box",
        title: "Smart Drop-Box",
        desc: "Secure IoT package drop box built on ESP32 and FreeRTOS, coordinating OTP access, sensors, actuators, concurrent tasks, Blynk cloud monitoring, and real-time delivery notifications through an embedded control workflow.",
        stack: "ESP32, FreeRTOS, Blynk, C++",
        tag: "IoT",
        color: "#22C55E",
        images: ["smart-drop-box-1.png", "smart-drop-box-2.png"],
        url: "https://github.com/IfanFYS/IOT8-Smart-DropBox"
    },
    {
        slug: "noir-monitoring",
        title: "NOIR Monitoring",
        desc: "Environmental monitoring prototype programmed in AVR Assembly, processing noise and air-quality sensor inputs to drive visual and audio warnings, with microcontroller behavior and alert logic validated through Proteus simulation.",
        stack: "Arduino, AVR Assembly, Proteus",
        tag: "Embedded",
        color: "#00D1C1",
        images: ["noir-monitoring-1.png", "noir-monitoring-2.png"],
        url: "https://github.com/IfanFYS/PA_MBD_Kelompok20"
    },
    {
        slug: "parking-counter",
        title: "Parking Counter",
        desc: "Digital parking-capacity counter designed from counters, flip-flops, and combinational logic, tracking vehicle entry and exit events to update real-time space availability while validating the complete circuit behavior in Proteus.",
        stack: "Digital Logic, Proteus",
        tag: "Circuitry",
        color: "#EF4444",
        images: ["parking-counter-1.png", "parking-counter-2.png"],
        url: "https://github.com/IfanFYS/Uni-Projects/tree/master/Dasar%20Sistem%20Digital/WN_PKB9"
    }
];
