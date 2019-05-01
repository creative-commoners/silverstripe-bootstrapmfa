<?php

namespace SilverStripe\MFA\Tests\Service\BackupCodeGeneratorTest;

use SilverStripe\Core\Extension;
use SilverStripe\Dev\TestOnly;

class BackupGeneratorTestingExtension extends Extension implements TestOnly
{
    public $enableCharacterSetUpdate = false;

    /**
     * Mock the hashing process by returning the reversed input
     *
     * @param string $code
     * @param string $hash
     */
    public function updateHash($code, &$hash)
    {
        $hash = strrev($code);
    }

    /**
     * Change the character set to be all integers when the flag is set
     * in order to force the generation of codes that are all numbers.
     * This is used in tests to ensure that strings aren't auto cast into
     * integers as "123abc" would become the integer 123 according to PHP.
     * This has previously played issue with tests and code generation
     * so is now actively tested for.
     *
     * @param string $characterSet
     */
    public function updateCharacterSet(&$characterSet)
    {
        if ($this->enableCharacterSetUpdate) {
            $characterSet = array_merge(range(0, 9));
        }
    }
}
