print("How many km did you cycle today?")
kms = input()
miles = float(kms)/1.60934
miles = round(miles,2)
print(f"ok {kms} km  - is {miles} miles")