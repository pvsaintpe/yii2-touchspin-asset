<?php
/**
 * Created by PhpStorm.
 * User: grimailo.am
 * Date: 28.12.2018
 * Time: 13:20
 */

namespace pvsaintpe\touchspin;


class TouchSpinAsset extends kartik\touchspin\TouchSpinAsset
{

    public function init()
    {
        $this->setSourcePath(__DIR__ . '/assets');
        $this->setupAssets('js', ['js/touchspin']);
        parent::init();
    }
}