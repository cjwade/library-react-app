import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";

const BookInfo = () => {
	const param = useParams();
	console.log(param);

	return (
		<div>
			<div id="books__body">
				<main id="books__main">
					<div className="books__container">
						<div className="row">
							<div className="book__selected--top">
								<Link to="/books" className="book__link">
									<FontAwesomeIcon icon="arrow-left" />
								</Link>
								<Link to="/books">
									<h2 className="book__selected--title--top">Books</h2>
								</Link>
							</div>
							<div className="book__selected">
								<figure className="book__selected--figure">
									<img
										src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
										alt=""
										className="book__selected--img"
									/>
								</figure>
								<div className="book__selected--description">
									<h2 className="book__selected--title">
										Crack the Coding Interview
									</h2>
									<Rating rating="4.5" />
									<div className="book_selected--price">
										<Price originalPrice={50} salePrice={null} />
									</div>
									<div className="book__summary">
										<div className="book__summary--tile">Summary</div>
										<p className="book__summary__para">
											Lorem ipsum dolor sit amet consectetur, adipisicing elit.
											Cum officia quod, sequi dolorem corporis aliquam porro
											autem dolore molestiae eum repudiandae cupiditate nemo
											perspiciatis exercitationem? Quis odio quia enim. Quia!
										</p>
										<p className="book__summary__para">
											Lorem ipsum dolor sit amet consectetur, adipisicing elit.
											Cum officia quod, sequi dolorem corporis aliquam porro
											autem dolore molestiae eum repudiandae cupiditate nemo
											perspiciatis exercitationem? Quis odio quia enim. Quia!
										</p>
									</div>
									<button className="btn">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>

					<div className="books__container">
						<div className="row">
							<div className="book__selected--top">
								<h2 className="book__selected--title--top">
									Recommended Books
								</h2>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default BookInfo;
