
# this is just for testing

.PHONY: help build run clean

#: Show this help
help:
	@cat $(MAKEFILE_LIST) | deno run -q help.ts

#: Build library into a bundle for distribution
build: bundle.ts

#: Run it locally
run:
	deno run -A --unstable main.ts

#: Clean up built resources
clean:
	rm -f bundle.ts

# this comment won't show in help
bundle.ts: main.ts
	deno bundle --unstable  main.ts > bundle.ts