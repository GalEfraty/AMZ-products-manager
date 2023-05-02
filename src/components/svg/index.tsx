const LinkIcon = ({ color = 'currentColor', height = '24', width = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9 8L7 8C5.11438 8 4.17157 8 3.58578 8.58579C3 9.17158 3 10.1144 3 12V12C3 13.8856 3 14.8284 3.58579 15.4142C4.17157 16 5.11438 16 7 16L9 16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15 16L17 16C18.8856 16 19.8284 16 20.4142 15.4142C21 14.8284 21 13.8856 21 12V12C21 10.1144 21 9.17157 20.4142 8.58578C19.8284 8 18.8856 8 17 8L15 8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 12H16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const AvailableIcon = ({ color = 'currentColor', height = '24', width = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.8284 6.82843C18.4065 7.40649 18.6955 7.69552 18.8478 8.06306C19 8.4306 19 8.83935 19 9.65685L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12.3431C13.1606 3 13.5694 3 13.9369 3.15224C14.3045 3.30448 14.5935 3.59351 15.1716 4.17157L17.8284 6.82843Z'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M9 14L10.5772 15.5772V15.5772C10.8107 15.8107 11.1893 15.8107 11.4228 15.5772V15.5772L15 12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const UnavailableIcon = ({ color = 'currentColor', height = '24', width = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.5 11L14.5 16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.5 11L9.5 16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.8284 6.82843C18.4065 7.40649 18.6955 7.69552 18.8478 8.06306C19 8.4306 19 8.83935 19 9.65685L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12.3431C13.1606 3 13.5694 3 13.9369 3.15224C14.3045 3.30448 14.5935 3.59351 15.1716 4.17157L17.8284 6.82843Z'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
  </svg>
);

const DoubleArrowIcon = ({ color = 'currentColor', height = '24', width = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9 17L11.7772 19.7772V19.7772C11.9002 19.9002 12.0998 19.9002 12.2228 19.7772V19.7772L15 17'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15 7L12.201 4.20104V4.20104C12.09 4.09001 11.91 4.09001 11.799 4.20104V4.20104L9 7'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const SadEmojiIcon = ({ color = 'currentColor', height = '24', width = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M8 16C8.91221 14.7856 10.3645 14 12.0004 14C13.6362 14 15.0885 14.7856 16.0007 16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M9 10.0112V10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M15 10.0112V10' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
);

const MagnifyingGlassIcon = ({ color = 'currentColor', height = '24', width = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17 17L21 21'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
);

export {
  AvailableIcon,
  DoubleArrowIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  SadEmojiIcon,
  UnavailableIcon,
};
