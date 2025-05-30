<?php

declare(strict_types=1);

namespace Prism\Prism\Exceptions;

use Exception;
use Prism\Prism\ValueObjects\ToolCall;
use Throwable;

class PrismException extends Exception
{
    public static function promptOrMessages(): self
    {
        return new self('You can only use `prompt` or `messages`');
    }

    public static function toolNotFound(string $name, Throwable $previous): self
    {
        return new self(
            sprintf('Tool (%s) not found', $name),
            previous: $previous
        );
    }

    public static function multipleToolsFound(string $name, Throwable $previous): self
    {
        return new self(
            sprintf('Multiple tools with the name %s found', $name),
            previous: $previous
        );
    }

    public static function toolCallFailed(ToolCall $toolCall, Throwable $previous): self
    {
        return new self(
            sprintf('Calling %s tool failed', $toolCall->name),
            previous: $previous
        );
    }

    public static function invalidParameterInTool(string $toolName, Throwable $previous): self
    {
        return new self(
            sprintf('Invalid parameters for tool : %s', $toolName),
            previous: $previous
        );
    }

    public static function invalidReturnTypeInTool(string $toolName, Throwable $previous): self
    {
        return new self(
            sprintf('Invalid return type for tool : %s. Tools must return string.', $toolName),
            previous: $previous
        );
    }

    public static function providerResponseError(string $message): self
    {
        return new self($message);
    }

    public static function providerRequestError(string $model, Throwable $previous): self
    {
        return new self(vsprintf('Sending to model (%s) failed: %s', [
            $model,
            $previous->getMessage(),
        ]), previous: $previous);
    }

    public static function unsupportedProviderAction(string $method, string $provider): self
    {
        return new self(sprintf(
            '%s is not supported by %s',
            ucfirst($method),
            $provider,
        ));
    }
}
