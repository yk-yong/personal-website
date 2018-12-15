/* @flow */
import axios from "axios";

import config from "../config";

export default axios.create({
  baseURL: `${config.blog_url}/wp-json`
});
