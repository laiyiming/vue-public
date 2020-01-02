import http from "@/utils/http";

export default {
  /**
   * 示范接口
   */
  getDictionary: () => http.get("/dictionary")
};
