import { useEffect, useState } from "react";
import { activeUserList } from "../../apis/profile.api";
import { toast } from "react-toastify";
import CreateSong from "../../components/Song"; //hamo bashar kore.

const userDashboard = () => {    //hamo bshar kore

  useEffect(() => {
  }, []);

  return (
    <div>
      <CreateSong />
    </div>
  );
};

export default userDashboard;
