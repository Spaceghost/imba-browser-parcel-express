
tag Simple
    prop x default: Math.floor( Math.random * 300 )
    prop y default: Math.floor( Math.random * 300 )

    def render
        <self css:top="{@y}px" css:left="{@x}px"> "Hello Isn't this fun?"

Imba.mount <Simple>