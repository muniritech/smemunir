const ComparisonRatioSVG = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 2.5V6H8.625M11.25 6C11.25 6.68944 11.1142 7.37213 10.8504 8.00909C10.5865 8.64605 10.1998 9.2248 9.71231 9.71231C9.2248 10.1998 8.64605 10.5865 8.00909 10.8504C7.37213 11.1142 6.68944 11.25 6 11.25C5.31056 11.25 4.62787 11.1142 3.99091 10.8504C3.35395 10.5865 2.7752 10.1998 2.28769 9.71231C1.80018 9.2248 1.41347 8.64605 1.14963 8.00909C0.885795 7.37213 0.75 6.68944 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6Z"
        stroke="#666666"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const BlockSVG = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.71237 9.71234C10.6969 8.72776 11.2501 7.3924 11.2501 6C11.2501 4.60761 10.6969 3.27224 9.71237 2.28767C8.72779 1.3031 7.39243 0.749969 6.00003 0.749969C4.60764 0.749969 3.27227 1.3031 2.2877 2.28767M9.71237 9.71234C8.72779 10.6969 7.39243 11.25 6.00003 11.25C4.60764 11.25 3.27227 10.6969 2.2877 9.71234C1.30313 8.72776 0.75 7.3924 0.75 6C0.75 4.60761 1.30313 3.27224 2.2877 2.28767M9.71237 9.71234L2.2877 2.28767"
        stroke="#DC2626"
        stroke-width="1.33"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const GreeTickSVG = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.25 6.4375L5.5625 7.75L7.75 4.6875M11.25 6C11.25 6.68944 11.1142 7.37213 10.8504 8.00909C10.5865 8.64605 10.1998 9.2248 9.71231 9.71231C9.2248 10.1998 8.64605 10.5865 8.00909 10.8504C7.37213 11.1142 6.68944 11.25 6 11.25C5.31056 11.25 4.62787 11.1142 3.99091 10.8504C3.35395 10.5865 2.7752 10.1998 2.28769 9.71231C1.80018 9.2248 1.41347 8.64605 1.14963 8.00909C0.885795 7.37213 0.75 6.68944 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6Z"
        stroke="#22C55E"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ConnetionIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4229_57586)">
        <path
          d="M14 11.3333H10.402C9.86605 11.3333 9.33802 11.204 8.86266 10.9565C8.3873 10.7089 7.97865 10.3504 7.67133 9.91133L7.32867 9.422C7.02135 8.98291 6.6127 8.6244 6.13734 8.37685C5.66198 8.12931 5.13395 8.00004 4.598 8H2"
          stroke="#475569"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 4.66666H10.4033C9.86704 4.66663 9.33866 4.79601 8.86305 5.04379C8.38743 5.29158 7.97863 5.65047 7.67133 6.08999L7.33133 6.57666C7.0241 7.01608 6.6154 7.37491 6.13991 7.6227C5.66442 7.87048 5.13618 7.99991 4.6 7.99999H2"
          stroke="#475569"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 6.66666L14 4.66666L12 2.66666"
          stroke="#475569"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 13.3333L14 11.3333L12 9.33334"
          stroke="#475569"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4229_57586">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ResetIcon = ({ _height = "14", _width = "13", _color = "#fff" }) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.68205 4.73196H13.01L10.8894 2.60996C10.2066 1.92721 9.35618 1.43622 8.42352 1.18636C7.49086 0.936505 6.50885 0.936578 5.57623 1.18658C4.6436 1.43657 3.79322 1.92768 3.11058 2.61054C2.42794 3.29339 1.93709 4.14392 1.68738 5.07663M0.990047 11.596V8.26796M0.990047 8.26796H4.31805M0.990047 8.26796L3.11005 10.39C3.79279 11.0727 4.64324 11.5637 5.57591 11.8136C6.50857 12.0634 7.49057 12.0633 8.4232 11.8133C9.35583 11.5633 10.2062 11.0722 10.8888 10.3894C11.5715 9.70653 12.0623 8.856 12.312 7.92329M13.01 1.40396V4.73063"
        stroke={_color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const CheckMissinicon = () => {
  return (
    <svg
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.56667 2.05733C5.52333 2.19733 5.5 2.346 5.5 2.5C5.5 2.776 5.724 3 6 3H9C9.13261 3 9.25979 2.94732 9.35355 2.85355C9.44732 2.75979 9.5 2.63261 9.5 2.5C9.50005 2.34994 9.47757 2.20072 9.43333 2.05733M5.56667 2.05733C5.66135 1.75113 5.85158 1.48329 6.10951 1.29303C6.36743 1.10276 6.67949 1.00008 7 1H8C8.67467 1 9.24467 1.44533 9.43333 2.05733M5.56667 2.05733C5.316 2.07267 5.06667 2.09067 4.81733 2.11067C4.06333 2.17333 3.5 2.81533 3.5 3.572V5M9.43333 2.05733C9.684 2.07267 9.93333 2.09067 10.1827 2.11067C10.9367 2.17333 11.5 2.81533 11.5 3.572V10.5C11.5 10.8978 11.342 11.2794 11.0607 11.5607C10.7794 11.842 10.3978 12 10 12H8.5M3.5 5H1.25C0.836 5 0.5 5.336 0.5 5.75V13.25C0.5 13.664 0.836 14 1.25 14H7.75C8.164 14 8.5 13.664 8.5 13.25V12M3.5 5H7.75C8.164 5 8.5 5.336 8.5 5.75V12M3 10L4 11L6 8.5"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ModalCrossIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4L4 12M4 4L12 12"
        stroke="#666666"
        stroke-width="1.1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const CalenderIconSVG = ({
  _height = "16",
  _width = "16",
  _color = "#18181B",
}) => {
  return (
    <svg
      width={_height}
      height={_width}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6667 1.33337V4.00004M5.33333 1.33337V4.00004M2 6.66671H14M3.33333 2.66671H12.6667C13.403 2.66671 14 3.26366 14 4.00004V13.3334C14 14.0698 13.403 14.6667 12.6667 14.6667H3.33333C2.59695 14.6667 2 14.0698 2 13.3334V4.00004C2 3.26366 2.59695 2.66671 3.33333 2.66671Z"
        stroke={_color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const PlayIcon = ({ _color = "#fff", _height = "13", _width = "11" }) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.60392 1.52451C1.33728 1.3665 1 1.55869 1 1.86863V11.1313C1 11.4412 1.33728 11.6334 1.60392 11.4754L9.41933 6.8441C9.68073 6.68917 9.68073 6.31077 9.41933 6.15583L1.60392 1.52451Z"
        stroke={_color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const GreenCircleTick = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4229_58005)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00004 0.833252C4.042 0.833252 0.833374 4.04188 0.833374 7.99992C0.833374 11.958 4.042 15.1666 8.00004 15.1666C11.9581 15.1666 15.1667 11.958 15.1667 7.99992C15.1667 4.04188 11.9581 0.833252 8.00004 0.833252ZM5.02033 7.97972C4.82507 7.78445 4.50849 7.78445 4.31323 7.97972C4.11797 8.17498 4.11797 8.49152 4.31323 8.68678L6.31323 10.6868C6.50849 10.8821 6.82511 10.8821 7.02031 10.6868L11.687 6.02014C11.8822 5.82488 11.8822 5.50829 11.687 5.31303C11.4917 5.11777 11.1752 5.11777 10.9799 5.31303L6.66677 9.62612L5.02033 7.97972Z"
          fill="#16A34A"
        />
      </g>
      <defs>
        <clipPath id="clip0_4229_58005">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const RedCrossIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.00004 0.833252C4.042 0.833252 0.833374 4.04188 0.833374 7.99992C0.833374 11.958 4.042 15.1666 8.00004 15.1666C11.9581 15.1666 15.1667 11.958 15.1667 7.99992C15.1667 4.04188 11.9581 0.833252 8.00004 0.833252ZM6.4678 5.76075C6.27254 5.56549 5.95596 5.56549 5.76069 5.76075C5.56543 5.95601 5.56543 6.27259 5.76069 6.46785L7.29277 7.99992L5.76069 9.53199C5.56543 9.72725 5.56543 10.0439 5.76069 10.2391C5.95596 10.4344 6.27254 10.4344 6.4678 10.2391L7.99984 8.70705L9.53191 10.2391C9.72717 10.4344 10.0438 10.4344 10.239 10.2391C10.4343 10.0439 10.4343 9.72725 10.239 9.53199L8.70697 7.99992L10.239 6.46785C10.4343 6.27259 10.4343 5.95601 10.239 5.76075C10.0438 5.56549 9.72717 5.56549 9.53191 5.76075L7.99984 7.29278L6.4678 5.76075Z"
        fill="#DC2626"
      />
    </svg>
  );
};

const TaskManager = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4H13.3333"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.53333 3.86665L3.06666 4.39998L4.39999 3.06665"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.53333 7.86665L3.06666 8.39998L4.39999 7.06665"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.53333 11.8666L3.06666 12.4L4.39999 11.0667"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 8H13.3333"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 12H13.3333"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const UploadButtonSVG = ({_height="16", _width="16", _color="#fff"}) => {
  return (
    <svg
      width={_height}
      height={_width}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 13.6V2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4V13.6C14 13.8209 13.8209 14 13.6 14H2.4C2.17909 14 2 13.8209 2 13.6Z"
        stroke={_color}
      />
      <path
        d="M4 12H12"
        stroke={_color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.00002 9.33333V4M8.00002 4L10.3334 6.33333M8.00002 4L5.66669 6.33333"
        stroke={_color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const FilterQeefSVG = () => {
  return(
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666626 0.666504H11.3333V2.1145C11.3332 2.4681 11.1927 2.80718 10.9426 3.05717L7.99996 5.99984V10.6665L3.99996 11.9998V6.33317L1.01329 3.04784C0.790258 2.80245 0.666661 2.48277 0.666626 2.15117V0.666504Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}
const UploadCSVSVG = () => {
  return(
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33325 14.1668V15.8335C3.33325 16.2755 3.50885 16.6994 3.82141 17.012C4.13397 17.3246 4.55789 17.5002 4.99992 17.5002H14.9999C15.4419 17.5002 15.8659 17.3246 16.1784 17.012C16.491 16.6994 16.6666 16.2755 16.6666 15.8335V14.1668M5.83325 7.50016L9.99992 3.3335M9.99992 3.3335L14.1666 7.50016M9.99992 3.3335V13.3335" stroke="#999999" stroke-width="1.66" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}
export {
  BlockSVG,
  GreeTickSVG,
  ComparisonRatioSVG,
  ConnetionIcon,
  ResetIcon,
  CheckMissinicon,
  ModalCrossIcon,
  CalenderIconSVG,
  PlayIcon,
  GreenCircleTick,
  RedCrossIcon,
  TaskManager,
  UploadButtonSVG,
  FilterQeefSVG,
  UploadCSVSVG
};
