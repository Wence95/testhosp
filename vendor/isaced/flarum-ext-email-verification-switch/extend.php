<?php

use Flarum\Extend;
use Flarum\User\Event\Saving;

return [
    (new Extend\Event)
        ->listen(Saving::class, function (Saving $event) {
            if (!$event->user->exists) {
                $event->user->activate();
            }
        })
];
