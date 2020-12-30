declare module "*.css";
declare module "*.less";
declare module "*.m.less" {
  const styles: { [key: string]: string };
  export default styles;
}
declare module "*.png";
