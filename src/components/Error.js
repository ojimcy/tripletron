import React from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
            <Banner title="404" subtitle="page not found">
                <Link to="/" className="btn-primary">
                    return home
          </Link>
            </Banner>
        </div>
    );
}

export default Error;
