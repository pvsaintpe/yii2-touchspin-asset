<?php
/**
 * Created by PhpStorm.
 * User: grimailo.am
 * Date: 28.12.2018
 * Time: 13:20
 */

namespace pvsaintpe\touchspin;

class TouchSpin extends \kartik\widgets\TouchSpin
{
    /**
     * @var array
     */
    public $class = ['pv_touchspin'];

    public function init()
    {
        parent::init();
        TouchSpinAsset::register($this->getView());
        $this->options = array_merge_recursive(['class' => $this->class], $this->options);
    }
}