import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/6532218/pexels-photo-6532218.jpeg?cs=srgb&dl=pexels-alesia-kozik-6532218.jpg&fm=jpg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
              <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash-can"></i>
              </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Raihan</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto non beatae voluptas aut autem nemo illo nisi reprehenderit reiciendis, earum obcaecati veniam repellendus. Necessitatibus porro, quas pariatur est sunt doloribus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto non beatae voluptas aut autem nemo illo nisi reprehenderit reiciendis, earum obcaecati veniam repellendus. Necessitatibus porro, quas pariatur est sunt doloribus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto non beatae voluptas aut autem nemo illo nisi reprehenderit reiciendis, earum obcaecati veniam repellendus. Necessitatibus porro, quas pariatur est sunt doloribus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto non beatae voluptas aut autem nemo illo nisi reprehenderit reiciendis, earum obcaecati veniam repellendus. Necessitatibus porro, quas pariatur est sunt doloribus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto non beatae voluptas aut autem nemo illo nisi reprehenderit reiciendis, earum obcaecati veniam repellendus. Necessitatibus porro, quas pariatur est sunt doloribus.</p>
        </div>
    </div>
  )
}
