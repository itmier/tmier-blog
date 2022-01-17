/*
 * @Author: 王云飞
 * @Date: 2022-01-14 15:44:10
 * @LastEditTime: 2022-01-14 15:57:38
 * @LastEditors: 王云飞
 * @Description: 
 * 
 */
export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    if (typeof _hmt !== "undefined") {
      if (to.path) {
        _hmt.push(["_trackPageview", to.fullPath]);
      }
    }
    
    next();
  });
}