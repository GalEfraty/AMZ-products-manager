type Vars = {
  serverUrl: string;
};

const vars: Vars = {
  serverUrl: import.meta.env.VITE_SERVER_URL || 'http://localhost:3000',
};

export default vars;
