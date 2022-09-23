import React from 'react';

export const SelectedHackathonContext = React.createContext({
    selectedHackathonId: "",
    setSelectedHackathonId: (_value:string) => {}
  });

interface ISelectedHackathonProviderProps {
    children: React.ReactNode,
}

const SelectedHackathonProvider: React.FunctionComponent<ISelectedHackathonProviderProps> = ({ children }) => {
  const [hackathonId, setHackathonId] = React.useState("");
  return (
    <SelectedHackathonContext.Provider
      value={
        {
            selectedHackathonId: hackathonId,
            setSelectedHackathonId: setHackathonId
        }
      }
    >
      {children}
    </SelectedHackathonContext.Provider>
  )
}

export default SelectedHackathonProvider;