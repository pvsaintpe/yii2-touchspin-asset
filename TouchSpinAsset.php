<?php
/**
 * Created by PhpStorm.
 * User: grimailo.am
 * Date: 28.12.2018
 * Time: 13:20
 */

namespace pvsaintpe\touchspin;


use kartik\base\AssetBundle;

class TouchSpinAsset extends AssetBundle
{

    public function init()
    {
        $this->setSourcePath(__DIR__ . '/assets');
        $this->setupAssets('js', ['touchspin']);
        parent::init();
    }
}