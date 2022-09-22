import "./post.css"

export default function Post() {
  return (
    <div className="post">
    <img className="postImg" src="https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-2132126.jpg&fm=jpg" alt="" />
    <div className="postInfo">
        <div className="postCategories">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sapiente dolor voluptatem eum animi error inside praesentium deserunt ducimus, commodi, amet gobor quibusdam! Aliquam ipsa repudiandae cum consequuntur vel, assumenda quas magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sapiente dolor voluptatem eum animi error praesentium deserunt ducimus, commodi, amet quibusdam! Aliquam ipsa repudiandae cum consequuntur vel, assumenda quas magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sapiente dolor voluptatem eum animi error praesentium deserunt ducimus, commodi, amet quibusdam! Aliquam ipsa repudiandae cum consequuntur vel, assumenda quas magnam.</p>
</div>
  )
}
