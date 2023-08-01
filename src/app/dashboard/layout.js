import Sidebar from "./Sidebar";

export const metadata = {
    title: 'Dashboard | Next hero',
    description: 'Next programming hero',
  }
  
const DashboardLayout = ({ children }) => {
    return (
        <div className="flex container mx-auto">
            <Sidebar />
            { children }
        </div>
    );
};

export default DashboardLayout;