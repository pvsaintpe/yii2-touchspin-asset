<?php
/**
 * Created by PhpStorm.
 * User: grimailo.am
 * Date: 28.12.2018
 * Time: 13:20
 */

namespace pvsaintpe\touchspin;


use pvsaintpe\helpers\ArrayHelper;

class TouchSpin extends \kartik\widgets\TouchSpin
{
    /**
     * @var array
     */
    public $class = ['pv_touchspin'];

    public function init()
    {
        TouchSpinAsset::register($this->getView());
        $this->options = ArrayHelper::merge(['class' => $this->class], $this->options);
        parent::init();
    }
}