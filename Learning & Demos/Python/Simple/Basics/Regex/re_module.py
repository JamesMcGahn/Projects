import re

pattern = re.compile(r"\d{3} \d{3}-\d{4}")

result1 = pattern.search("121313123 1e1d1r12 dd")
print(result1)
result2 = pattern.search("hey there 123 456-8795 1e1d1r12 dd")
print(result2.group())
result3 = pattern.findall("hey there 123 456-8795 1e1d1r12 dd 145 456-3295")
print(result3)
# has to recompile each time used - more efficient to use re.compile if using more than once
result4 = re.search(r"\d{3} \d{3}-\d{4}", "hey there 123 456-8795 1e1d1r12 dd")
print(result4.group())


def extract_phone(input):
    phone = re.compile(r"\b\d{3} \d{3}-\d{4}\b")
    match = phone.search(input)
    if match:
        return match.group()
    return None


def extract_all_phone(input):
    phone = re.compile(r"\b\d{3} \d{3}-\d{4}\b")
    return phone.findall(input)


def valid_phone(input):
    phone = re.compile(r"^\b\d{3} \d{3}-\d{4}\b$")
    match = phone.search(input)
    if match:
        return True
    return False


print(extract_phone("hey there 123 456-8795 1e1d1r12 dd 145 456-3295"))
print(extract_all_phone("hey there 123 456-8795 1e1d1r12 dd 145 456-3295"))
print(valid_phone("hey there 123 456-8795 1e1d1r12 dd 145 456-3295"))
print(valid_phone("145 456-3295"))


# grouping and naming group
def parse_name(input):
    name_regex = re.compile(
        r"^(Mr\.|Mrs\.|Ms\.|Mdme\.) (?P<first>[A-Za-z]+) (?P<last>[A-Za-z]+)$"
    )
    matches = name_regex.search(input)
    print(matches.group())
    print(matches.group("first"))
    print(matches.group("last"))


parse_name("Mr. Bobby Swanson")


# Verbose - allows for comments in regex and to expand to multi line

pattern = re.compile(
    r"""
	^([a-z0-9_\.-]+)	#first part of email	
	@					#single @ sign
	([0-9a-z\.-]+)		#email provider
	\.					#single period
	([a-z\.]{2,6})$		#com, org, net, etc.
""",
    re.X | re.I,
)
# re.X = re.VERBOSE
# re.I = re.IGNORECASE
match = pattern.search("ThomaS123@Yahoo.com")
print(match.group())
print(match.groups())


# substitution

text = "Last night Mrs. Hand and Mr. Cheese murdered Ms. Frank"

pattern = re.compile(r"(Mr\.|Mrs\.|Ms\.) ([a-z])[a-z]+", re.I)
result = pattern.sub(r"\g<1> \g<2>", text)  # Last night Mrs. H and Mr. C murdered Ms. F
print(result)

# swapping
titles = [
    "Significant Others (1987)",
    "Tales of the City (1978)",
    "The Days of Anna Madrigal (2014)",
    "Mary Ann in Autumn (2010)",
    "Further Tales of the City (1982)",
    "Babycakes (1984)",
    "More Tales of the City (1980)",
    "Sure of You (1989)",
    "Michael Tolliver Lives (2007)",
]
titles.sort()
fixed_titles = []

pattern = re.compile(r"(?P<title>^[\w ]+) \((?P<date>\d{4})\)")
for book in titles:
    # result = pattern.sub("\g<2> - \g<1>", book)
    result = pattern.sub(r"\g<date> - \g<title>", book)

    fixed_titles.append(result)
fixed_titles.sort()
print(fixed_titles)
