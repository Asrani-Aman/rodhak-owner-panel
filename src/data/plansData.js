export const plansData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        version="1.0"
        id="bus"
      >
        <circle cx="55" cy="55" r="55" fill="#FABC3D"></circle>
        <path
          fill="#DF2C2C"
          d="M79 31a8 8 0 0 0-8-8H39a8 8 0 0 0-8 8v50a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V31z"
        ></path>
        <path
          fill="#FA5655"
          d="M76.198 24.926A7.963 7.963 0 0 0 71 23H39a8 8 0 0 0-8 8v39.124l45.198-45.198z"
        ></path>
        <path
          fill="#3E3E3F"
          d="M31 83v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2H31zM67 85a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2H67v2z"
        ></path>
        <path
          fill="#FA5655"
          d="M81 74a4 4 0 0 0-4-4h-9l-2.447-2.894A2 2 0 0 0 63.764 66H46.236a2 2 0 0 0-1.789 1.106L42 70h-9a4 4 0 0 0-4 4v7a2 2 0 0 0 2 2h48a2 2 0 0 0 2-2v-7z"
        ></path>
        <path
          fill="#BF0302"
          d="M54 69h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7V69zM56 69h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7V69z"
        ></path>
        <circle cx="37" cy="77" r="3" fill="#FBE158"></circle>
        <circle cx="72" cy="77" r="3" fill="#FBE158"></circle>
        <path fill="#E2E4E5" d="M31 47h48v2H31z"></path>
        <path fill="#FFF" d="M54.124 47H31v2h21.124z"></path>
        <path
          fill="#40C9E7"
          d="M75 49H57v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V49z"
        ></path>
        <path
          fill="#6FDAF1"
          d="M35 37a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H37a2 2 0 0 0-2 2v8z"
        ></path>
        <path
          fill="#40C9E7"
          d="M57 37a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H59a2 2 0 0 0-2 2v8z"
        ></path>
        <path
          fill="#6FDAF1"
          d="M73 27H59a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.124L73.9 27.223A1.977 1.977 0 0 0 73 27z"
        ></path>
        <path
          fill="#FBEC9A"
          d="M72 74.044a3 3 0 0 0-3 3c0 .751.286 1.43.742 1.956l4.214-4.214A2.976 2.976 0 0 0 72 74.044zM37 74a3 3 0 0 0-3 3c0 .751.286 1.43.742 1.956l4.214-4.214A2.976 2.976 0 0 0 37 74z"
        ></path>
        <path
          fill="#40C9E7"
          d="M35 49h18v8H35zM35 61a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2H35v2z"
        ></path>
        <path
          fill="#6FDAF1"
          d="m44.124 57 8-8H35v8zM35 59v2a2 2 0 0 0 2 2h1.124l4-4H35z"
        ></path>
      </svg>
    ),
    name: "HIMRAAHI",
    description: "Track Public Transport ",
    // price: "Free",
    link: "Try Now For Free",
    link2: "https://www.live.himraahi.in/",
    features: [
      //   "2 hours of excercises",
      //   "Free consultaion to coaches",
      //   "Access to The Community",
      //   "Access to The Community",
      //   "Access to The Community",
      {
        tick: true,
        facility: "Live Vehicle Tracking",
      },
      {
        tick: true,
        facility: "Fleet Management",
      },
      {
        tick: false,
        facility: "Driver Assistance and Maintenance",
      },
      {
        tick: false,
        facility: "Driver Profiling",
      },
      {
        tick: false,
        facility: "Drunk Driving Checks",
      },
    ],
  },
  {
    icon: (
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.11111 18L0 1.5L8.55556 9L14 0L19.4444 9L28 1.5L24.8889 18H3.11111ZM24.8889 22.5C24.8889 23.4 24.2667 24 23.3333 24H4.66667C3.73333 24 3.11111 23.4 3.11111 22.5V21H24.8889V22.5Z" />
      </svg>
    ),
    name: "RODHAK SUPER",
    description: "Unlock advanced premium features",
    link: "Let's Talk",
    link2:
      "https://docs.google.com/forms/d/e/1FAIpQLSehlDgfrZ9R4vFCL7srkRkBD_L-i-pq7R9pSx3QdRDRXsmRxg/viewform",
    features: [
      //   "2 hours of excercises",
      //   "Free consultaion to coaches",
      //   "Access to The Community",
      //   "Access to The Community",
      //   "Access to The Community",
      {
        tick: true,
        facility: "Live Vehicle Tracking",
      },
      {
        tick: true,
        facility: "Fleet Management",
      },
      {
        tick: true,
        facility: "Driver Assistance and Maintenance",
      },
      {
        tick: true,
        facility: "Driver Profiling",
      },
      {
        tick: true,
        facility: "Drunk Driving Checks",
      },
    ],
  },

  //   {
  //     icon: (
  //       <svg
  //         width="16"
  //         height="15"
  //         viewBox="0 0 16 15"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path d="M12.3812 3.41487L10.1103 1.2853C10.0359 1.21502 9.9475 1.15924 9.85006 1.12117C9.75262 1.0831 9.64811 1.0635 9.54255 1.0635C9.437 1.0635 9.33248 1.0831 9.23505 1.12117C9.13761 1.15924 9.04917 1.21502 8.97484 1.2853C8.82591 1.4258 8.74232 1.61585 8.74232 1.81395C8.74232 2.01204 8.82591 2.20209 8.97484 2.34259L10.67 3.93226L4.1932 10.006L2.49804 8.41634C2.34822 8.27668 2.14556 8.19829 1.93432 8.19829C1.72307 8.19829 1.52041 8.27668 1.3706 8.41634C1.29565 8.48605 1.23616 8.56898 1.19557 8.66036C1.15497 8.75173 1.13407 8.84974 1.13407 8.94873C1.13407 9.04772 1.15497 9.14573 1.19557 9.2371C1.23616 9.32848 1.29565 9.41141 1.3706 9.48112L3.61748 11.5882L5.86437 13.6953C5.93843 13.7661 6.02674 13.8225 6.12419 13.8611C6.22164 13.8997 6.3263 13.9198 6.43209 13.9202C6.59091 13.9211 6.74641 13.8776 6.87876 13.7952C7.01111 13.7129 7.11432 13.5955 7.17522 13.4579C7.23612 13.3204 7.25197 13.1689 7.22073 13.0229C7.18949 12.8769 7.11258 12.7429 6.99981 12.638L5.32864 11.0708L11.8054 4.99704L13.5006 6.58672C13.5751 6.65614 13.6636 6.71111 13.7608 6.74849C13.858 6.78587 13.9621 6.80494 14.0671 6.80459C14.1722 6.80424 14.2762 6.78449 14.3731 6.74646C14.47 6.70844 14.558 6.65288 14.632 6.58297C14.7061 6.51305 14.7647 6.43015 14.8045 6.33899C14.8444 6.24783 14.8647 6.1502 14.8644 6.05167C14.864 5.95315 14.8429 5.85566 14.8024 5.76476C14.7618 5.67387 14.7026 5.59136 14.628 5.52193L12.3812 3.41487ZM1.3706 11.5957C1.22003 11.4545 1.01581 11.3752 0.802876 11.3752C0.58994 11.3752 0.385725 11.4545 0.235157 11.5957C0.0845885 11.7369 1.5865e-09 11.9284 0 12.1281C-1.5865e-09 12.3278 0.0845885 12.5193 0.235157 12.6605L2.49804 14.7825C2.57275 14.852 2.66136 14.907 2.75878 14.9443C2.85621 14.9816 2.96052 15.0006 3.06576 15C3.17099 15.0006 3.27531 14.9816 3.37273 14.9443C3.47015 14.907 3.55876 14.852 3.63348 14.7825C3.70842 14.7128 3.76791 14.6299 3.8085 14.5385C3.8491 14.4471 3.87 14.3491 3.87 14.2501C3.87 14.1512 3.8491 14.0531 3.8085 13.9618C3.76791 13.8704 3.70842 13.7875 3.63348 13.7178L1.3706 11.5957ZM15.7635 2.34259L13.5006 0.220523C13.426 0.150609 13.3375 0.0951496 13.2401 0.0573121C13.1427 0.0194747 13.0383 0 12.9329 0C12.8274 0 12.723 0.0194747 12.6256 0.0573121C12.5282 0.0951496 12.4397 0.150609 12.3652 0.220523C12.2906 0.290438 12.2315 0.373439 12.1911 0.464786C12.1508 0.556134 12.13 0.65404 12.13 0.752914C12.13 0.851788 12.1508 0.949694 12.1911 1.04104C12.2315 1.13239 12.2906 1.21539 12.3652 1.2853L14.628 3.40737C14.7024 3.47765 14.7908 3.53344 14.8882 3.5715C14.9857 3.60957 15.0902 3.62917 15.1958 3.62917C15.3013 3.62917 15.4058 3.60957 15.5033 3.5715C15.6007 3.53344 15.6891 3.47765 15.7635 3.40737C15.8384 3.33766 15.8979 3.25473 15.9385 3.16335C15.9791 3.07198 16 2.97397 16 2.87498C16 2.77599 15.9791 2.67798 15.9385 2.58661C15.8979 2.49523 15.8384 2.4123 15.7635 2.34259Z" />
  //       </svg>
  //     ),
  //     name: "PRO PLAN",
  //     price: "45",
  //     features: [
  //       "8 hours of excercises",
  //       "Consultation of Private Coach",
  //       "Free Fitness Merchandises",
  //     ],
  //   },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        version="1.0"
        id="bus"
      >
        <circle cx="45" cy="45" r="50%" fill="#FABC3D"></circle>
        <circle cx="15" cy="0" r="50%" fill="#FABC3D"></circle>
        <path
          fill="#DF2C2C"
          d="M79 31a8 8 0 0 0-8-8H39a8 8 0 0 0-8 8v50a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V31z"
        ></path>
        <path
          fill="#FA5655"
          d="M76.198 24.926A7.963 7.963 0 0 0 71 23H39a8 8 0 0 0-8 8v39.124l45.198-45.198z"
        ></path>
        <path
          fill="#3E3E3F"
          d="M31 83v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2H31zM67 85a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2H67v2z"
        ></path>
        <path
          fill="#FA5655"
          d="M81 74a4 4 0 0 0-4-4h-9l-2.447-2.894A2 2 0 0 0 63.764 66H46.236a2 2 0 0 0-1.789 1.106L42 70h-9a4 4 0 0 0-4 4v7a2 2 0 0 0 2 2h48a2 2 0 0 0 2-2v-7z"
        ></path>
        <path
          fill="#BF0302"
          d="M54 69h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7V69zM56 69h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7V69z"
        ></path>
        <circle cx="37" cy="77" r="3" fill="#FBE158"></circle>
        <circle cx="72" cy="77" r="3" fill="#FBE158"></circle>
        <path fill="#E2E4E5" d="M31 47h48v2H31z"></path>
        <path fill="#FFF" d="M54.124 47H31v2h21.124z"></path>
        <path
          fill="#40C9E7"
          d="M75 49H57v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V49z"
        ></path>
        <path
          fill="#6FDAF1"
          d="M35 37a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H37a2 2 0 0 0-2 2v8z"
        ></path>
        <path
          fill="#40C9E7"
          d="M57 37a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H59a2 2 0 0 0-2 2v8z"
        ></path>
        <path
          fill="#6FDAF1"
          d="M73 27H59a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.124L73.9 27.223A1.977 1.977 0 0 0 73 27z"
        ></path>
        <path
          fill="#FBEC9A"
          d="M72 74.044a3 3 0 0 0-3 3c0 .751.286 1.43.742 1.956l4.214-4.214A2.976 2.976 0 0 0 72 74.044zM37 74a3 3 0 0 0-3 3c0 .751.286 1.43.742 1.956l4.214-4.214A2.976 2.976 0 0 0 37 74z"
        ></path>
        <path
          fill="#40C9E7"
          d="M35 49h18v8H35zM35 61a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2H35v2z"
        ></path>
        <path
          fill="#6FDAF1"
          d="m44.124 57 8-8H35v8zM35 59v2a2 2 0 0 0 2 2h1.124l4-4H35z"
        ></path>
      </svg>
    ),
    name: "RODHAK LITE",
    description: "With basic safety and fleet management features ",

    link: "Let's Talk",
    link2:
      "https://docs.google.com/forms/d/e/1FAIpQLSehlDgfrZ9R4vFCL7srkRkBD_L-i-pq7R9pSx3QdRDRXsmRxg/viewform",
    features: [
      //   "2 hours of excercises",
      //   "Free consultaion to coaches",
      //   "Access to The Community",
      //   "Access to The Community",
      //   "Access to The Community",
      {
        tick: true,
        facility: "Live Vehicle Tracking",
      },
      {
        tick: true,
        facility: "Fleet Management",
      },
      {
        tick: true,
        facility: "Driver Assistance and Maintenance (Basic)",
      },
      {
        tick: false,
        facility: "Driver Profiling",
      },
      {
        tick: false,
        facility: "Drunk Driving Checks",
      },
    ],
  },
];
