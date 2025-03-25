import { BlogCard } from "mori-components";
import "./index.less";
// test
const App = () => {
    return (
        <div className="mt-4">
            <BlogCard title="Title" time="x-xx" decs="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo saepe, in quibusdam alias facilis officiis ad non animi consectetur officia tenetur molestias doloribus ratione eaque! Commodi voluptatem aut inventore quo?" tagIcons={["AppleDark"]} />
        </div>
    );
};

export default App;
