<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
class ProductModel extends Database
{
    public function getProduct($id)
    {
        $product = null;
        if ($id === 'all') {
            $res = $this->select("SELECT id, name, description, price, color, image
            FROM product");
        } else {
            $res = $this->select("SELECT id, name, description, price, color, image
            FROM product Where id = $id");
        }
        return array(
            "code" => 0,
            "product" => $res
        );
    }

    public function addToCart($id, $quantity)
    {

        $res = $this->select("UPDATE product SET quantity = $quantity Where id = $id");

        return array(
            "code" => 0,
            "message" => 'Update OK'
        );
    }    
   
}
