import { useRouter } from "next/router";

const Profile = () => {

    const router = useRouter();
    const { username } = router.query;
    return (
        <div>
            <h1>Hi { username }</h1>
        </div>
    )
};

export default Profile