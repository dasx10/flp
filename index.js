import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import secretStore from "../../../store/secret";
import _useAccessMarkerId from "../_useAccessMarkerId";

const useSSHAddPublicKey = () => {
  const dispatch = useDispatch();
  const userId = _useAccessMarkerId();
  return ({ userName, publicKey }) => dispatch(secretStore.asyncActions.sshAddPublicKey({ userId, userName, publicKey })).then((data) => {
    if (data.error) {
      return toast.error(data.error.message);
    }
    return data;
  });
};

export default useSSHAddPublicKey;
